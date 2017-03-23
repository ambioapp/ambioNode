const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../../client/index.html`);
const css = fs.readFileSync(`${__dirname}/../../client/css/app.css`);
// const img = fs.readFileSync(`${__dirname}/../../client/css/app.css`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getCSS = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(css);
  response.end();
};

/* const getImg = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/jpg' });
  response.write(index);
  response.end();
};*/

module.exports.getIndex = getIndex;
module.exports.getCSS = getCSS;
// module.exports.getImg = getImg;
