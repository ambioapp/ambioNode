const http = require('http');
const url = require('url');
const query = require('querystring');
const fs = require('fs');

const staticFileHandler = require('./handlers/staticFiles.js');
const jsonHandler = require('./handlers/json.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  const parsedUrl = url.parse(request.url);

  switch (request.method) {
    case 'GET':
      if (parsedUrl.pathname === '/') {
        staticFileHandler.getIndex(request, response);
      } else if (parsedUrl.pathname === '/css/app.css') {
        staticFileHandler.getCSS(request, response);
      } else if (parsedUrl.pathname === '/images') {
        staticFileHandler.getImg(request, response);
      } else {
        jsonHandler.notFound(request, response);
      }
      break;

    case 'POST':
      if (parsedUrl.pathname === '/getBeyondVerbal') {
        const res = response;

        const body = [];

        request.on('error', (err) => {
          console.dir(err);
          res.statusCode = 400;
          res.end();
        });

        request.on('data', (chunk) => {
          body.push(chunk);
        });

        request.on('end', () => {
          const bodyString = Buffer.concat(body).toString();
          const bodyParams = query.parse(bodyString);
          fs.writeFile(`${__dirname}../files/test.wav`, bodyParams.file, (err) => {

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
