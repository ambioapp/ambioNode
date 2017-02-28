var Analyzer = require('../services/beyondVerbal.js')
var analyzer = new Analyzer('KEY')

const fs = require('fs');


const respondJson = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const getBeyondVerbal = (request, response) => {
    analyzer.analyze(fs.createReadStream(`${__dirname}/../../../test.wav`),function(err,analysis){
        console.log(analysis);
        respondJson(request, response, 200, analysis);
    });
    
}

const notFound = (request, response) => {
  const responseJson = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respondJson(request, response, 404, responseJson);
};

module.exports = {
  notFound,
  getBeyondVerbal,
};
