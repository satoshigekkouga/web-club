/*
*
*  file to obtain the ssl certificate and the required files
*
*/

const fs = require('fs');

const key = fs.readFileSync('./config/secrets/key.pem','utf8');
const cert = fs.readFileSync('./config/secrets/certificate.pem','utf8');
const credentials = {key,cert};

module.exports = {credentials};
