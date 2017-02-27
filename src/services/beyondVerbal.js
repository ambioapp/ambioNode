const fs = require('fs');
const http = require('http');
const querystring = require('querystring');



const analyze = (request, response) => {
    
    const options = {
    url: {
        tokenUrl: 'https://token.beyondverbal.com/token',
        serverUrl: 'https://apiv3.beyondverbal.com/v1/recording/',
    },
    apiKey: '---API KEY HERE---',
    token: '',
};
    
    const authenticate = (options) => {        
        
        const postData = querystring.stringify({
            'grant_type': "client_credentials",
            'apiKey': options.apiKey,
        });
        
        const reqOptions = {
            host: "token.beyondverbal.com",
            path: "/token",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData),
            }
        }
            var string = '';
        
          var req = http.request(reqOptions, (res) => {
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                string += chunk;
            });
            res.on('end', () => {
                var jsonResponse = JSON.parse(string);
                analyzeFile(options.apiKey,  fs.readFileSync(`${__dirname}/../../../test.wav`));
            });
          });

          req.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
          });

          // write data to request body
          req.write(postData);
          req.end();
    }
    
    function analyzeFile(apiKey, content, interval) {
        console.log('test');
        //var dfd = $.Deferred();
        var startUrl = options.url.serverUrl + 'start';

        //console.log('url::' + startUrl + ' token:' + options.token);
        
        const postData = JSON.stringify({
            'data-format': {
                'type': 'WAV',
            }
        });
        
        const reqOptions = {
            host: "apiv3.beyondverbal.com",
            path: "/v1/recording/start",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData),
                'Authorization': "Bearer " + options.token,
            }
        }
            var string = '';
        
          var req = http.request(reqOptions, (res) => {
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                string += chunk;
            });
            res.on('end', () => {
                var jsonResponse = JSON.parse(string);
                console.log('start succeeded');
                postContent(jsonResponse);
            });
          });

          req.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
          });

          // write data to request body
          req.write(postData);
          req.end();
        
        /*$.ajax({
                url: startUrl,
                headers: {
                    'Authorization': "Bearer " + options.token
                },
                type: "POST",
                cache: false,
                data: JSON.stringify({
                    dataFormat: {
                        type: "WAV"
                    }
                }),
                contentType: 'application/x-www-form-urlencoded',
                dataType: 'text'
            })
            .then(function (data) {
                Show(data);

                var recID = data.recordingId ? data.recordingId : JSON.parse(data).recordingId;
                //console.log('recid::' + recID);
                var upStreamUrl = options.url.serverUrl + recID;
                //post content for analysis
                $.ajax({
                        url: upStreamUrl,
                        headers: {
                            'Authorization': "Bearer " + options.token
                        },
                        data: content,
                        contentType: false,
                        processData: false,
                        cache: false,
                        dataType: 'text',
                        type: "POST"
                    })
                    .then(dfd.resolve, dfd.reject);

            }, dfd.reject);*/

        //return dfd.promise().always(function () {});
    }
    
    function postContent(data) {
        console.log(data);
        Show(data);
    }
    
    function Show(json) {
        var obj = jQuery.parseJSON( json );
        //obj.result.analysisSegments[0]
        if (obj.result) {
            console.log(obj.result.analysisSegments[0].analysis.Mood.Composite.Primary.Phrase);
        } else {
            console.log(obj);
        }
    }
    
    authenticate(options);
    
    const responseJson = {};
    
    responseJson.url = request.url;
    
    return responseJson;
}

module.exports = {
    analyze,
}