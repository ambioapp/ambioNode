const express = require('express');
var multer  = require('multer')
const http = require('http');
const url = require('url');
const query = require('querystring');
const fs = require('fs');
const path    = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${__dirname}/../files`)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.wav')
  }
})

var upload = multer({ storage: storage })


var app = express();

const staticFileHandler = require('./handlers/staticFiles.js');
const jsonHandler = require('./handlers/json.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

app.use(function (req, res, next) {
	console.log(req);
	console.log('Incoming Req above');
	next();
});

app.get('/', function(req, res) {
    res.sendFile(path.join(staticFileHandler.getIndex()))
});

app.post('/getBeyondVerbal', upload.single('test'), function (req, res, next) {
    console.log(req.file.size);
	console.log(req.file.mimetype);
	console.log(req.file.encoding);
    res.send('File Uploaded, sort out BV before proceeding.');
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