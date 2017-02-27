const beyondVerbalService = require('../services/beyondVerbal.js');

const respondJson = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const getBeyondVerbal = (request, response) => {
  const responseJson = beyondVerbalService.analyze(request, response);
    
  respondJson(request, response, 200, responseJson);
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