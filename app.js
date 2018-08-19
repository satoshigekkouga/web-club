const express = require('express');
const https = require('https');
const path = require('path');
const http = require('http');

const passportSetup = require('./config/passport/passport_setup');
const {credentials} = require('./config/cert');

const user_router = require('./routers/user_routes');
const oauth_router = require('./routers/oauth_routes');

const app = express();

app.use('/oauth',oauth_router);
app.use('/user',user_router);

app.get('/',(req,res) => {
  res.sendFile(path.join(__dirname,'./public/index.html'));
});

const serverHTTP = http.createServer(app);
serverHTTP.listen(3000,() => {
  console.log('HTTP at port 3000');
});

const server = https.createServer(credentials,app);
server.listen(5000,() => {
  console.log('app running on port 5000');
});
