const respondJson = (request, response, status, object) => {
  response.writeHead(status, { 'Content-Type': 'application/json' });
  response.write(JSON.stringify(object));
  response.end();
};

const notFound = (request, response) => {
  const responseJson = {
    message: 'The page you are looking for was not found.',
    id: 'notFound',
  };

  respondJson(request, response, 404, responseJson);
};

module.exports = {
  notFound,
};
