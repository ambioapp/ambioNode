const fs = require('fs');
const http = require('http');
const querystring = require('querystring');



const analyze = (request, response) => {
    
    const options = {
    url: {
        tokenUrl: 'https://token.beyondverbal.com/token',
        serverUrl: 'https://apiv3.beyondverbal.com/v1/recording/',
    },
        apiKey: 'ad81cbc4-d24f-4514-86db-8bc51381bd5c',
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
                options.token = jsonResponse.access_token;
                analyzeFile(options.apiKey, options.token,  fs.readFileSync(`${__dirname}/../../../test.wav`));
            });
          });

          req.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
          });

          // write data to request body
          req.write(postData);
          req.end();
    }
    
    function analyzeFile(apiKey, token, content, interval) {
        //var dfd = $.Deferred();
        var startUrl = options.url.serverUrl + 'start';

        //console.log('url::' + startUrl + ' token:' + options.token);
        
        const postData = JSON.stringify({
            dataFormat: {
                type: 'WAV',
            }
        });
        
        console.log(token);
        console.dir(postData);
        
        const reqOptions = {
            host: "apiv3.beyondverbal.com",
            path: "/v1/recording/start",
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData),
                'Authorization': "Bearer " + token,
            }
        }
        
        console.dir(reqOptions);
            var string = '';
        
          var startReq = http.request(reqOptions, (res) => {
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

          startReq.on('error', (e) => {
            console.log(`problem with request: ${e.message}`);
          });

          // write data to request body
          startReq.write(postData);
          startReq.end();
        
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