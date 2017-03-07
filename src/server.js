const express = require('express');
const http = require('http');
const url = require('url');
const query = require('querystring');
const fs = require('fs');
const path    = require("path");


var app = express();

const staticFileHandler = require('./handlers/staticFiles.js');
const jsonHandler = require('./handlers/json.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

app.get('/', function(req, res) {
    res.sendFile(path.join(staticFileHandler.getIndex()))
});

app.use(function(req, res) {
   res.send('404, not found'); 
});

app.listen(port, function () {
  console.log(`Example app listening on port: ${port}!`)
})


/*

const onRequest = (request, response) => {const parsedUrl = url.parse(request.url);

  switch (request.method) {
    case 'GET':
      if (parsedUrl.pathname === '/') {
        staticFileHandler.getIndex(request, response);
      } else {
        jsonHandler.notFound(request, response);
      }
      break;
    case 'POST':
      if (parsedUrl.pathname === '/getBeyondVerbal') {
        const res = response;

        var body = '';

        request.on('error', (err) => {
          console.dir(err);
          res.statusCode = 400;
          res.end();
        });

        request.on('data', (chunk) => {
          body += chunk;
        });

        request.on('end', () => {
            var data = query.parse(body);
            
          fs.writeFile(`${__dirname}/../files/test.wav`, data.file, function(err) {
              console.log(err);
          });
            
          jsonHandler.getBeyondVerbal(request, response);
        });
      }
      break;
    default:
      jsonHandler.notFound(request, response);
  }
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
*/