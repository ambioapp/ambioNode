const fs = require('fs');

const getIndex = () => {
    return `${__dirname}/../../client/index.html`;
};

module.exports.getIndex = getIndex;