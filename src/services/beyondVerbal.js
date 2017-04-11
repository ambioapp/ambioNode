const request = require('request');
const extend = require('extend');


const defaults = {
  tokenUrl: 'https://token.beyondverbal.com/token',
  serverUrl: 'https://apiv3.beyondverbal.com/v3/recording/',
};


//
// //Usage example
// var fs = require('fs')
// var Analyzer = require('./analyzer-v3')
//
//
// var analyzer = new Analyzer('YOUR_API_KEY')
//
// analyzer.analyze(fs.createReadStream('C:/path/to/Sample.wav'),function(err,analysis){
//     console.log(analysis);
//
// });
function Analyzer(apiKey, opts) {
  let tokenCahced = null;
  const options = extend({}, defaults, opts);
  this.analyze = function (stream, callback) {
    console.log('===File Stream Below===');
    console.log(stream);

    if (!tokenCahced) {
      return getToken(apiKey, options, (err, token) => {
        tokenCahced = token;
        return analyzeFile(tokenCahced, stream, options, callback);
      });
    }

    return analyzeFile(tokenCahced, stream, options, callback);
  };
}


module.exports = Analyzer;


// /
// / options.apiKey
// /
function getToken(apiKey, options, callback) {
  return request.post(options.tokenUrl, {
    form: {
      grant_type: 'client_credentials',
      apiKey,
    },
  }, (err, resp, body) => {
    if (!err) {
      return callback(null, JSON.parse(body).access_token);
    }
    return callback(err);
  });
}

function analyzeFile(token, stream, options, callback) {
  const startUrl = `${options.serverUrl}start`;
  const interval = options.interval;
  const streaming = interval;

    // 1. start
  return request.post(startUrl, {
    json: true,
    body: { dataFormat: { type: 'WAV' } },
    auth: { bearer: token },
  }, (err, resp, body) => {
    let timer;
    function errorCalback(err) {
      if (timer) { clearInterval(timer); }
      callback(err);
    }

    if (err) {
      return errorCalback(err);
    }

    const recordingUrl = options.serverUrl + body.recordingId;
    stream.pipe(request.post(recordingUrl, { auth: { bearer: token } },
            (err, resp, body) => {
              if (err) {
                errorCalback(err);
              } else {
                    // if (!streaming) {
                const jsonResp = JSON.parse(body);
                callback(null, jsonResp);
                    // }
              }
            }));

    if (streaming) {
      let offset = 0;
      timer = setInterval(() => {
        const analysisUrl = `${recordingUrl}/analysis?fromMs=${offset}`;
        return request.get(analysisUrl, { auth: { bearer: token } }, (err, resp, body) => {
          if (err) { return errorCalback(err); }

          let jsonResp = JSON.parse(body),
            sessionStatus = jsonResp.result.sessionStatus;
          if (sessionStatus === 'Processing') {
            if (jsonResp.result.analysisSegments) {
                                // calculate and update ooset
              const len = jsonResp.result.analysisSegments.length - 1;
              offset = jsonResp.result.analysisSegments[len].offset;
              callback(null, jsonResp.result);
            }
          } else if (sessionStatus === 'Done') {
            if (timer) {
              clearInterval(timer);
            }
            callback(null, jsonResp.result);
          }
        });
      }, interval);
    }
  });
}
