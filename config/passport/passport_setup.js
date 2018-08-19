const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const fs = require('fs');
const path = require('path');

const keys = JSON.parse(fs.readFileSync(path.join(__dirname,'../secrets/client_id.json'))).web;

passport.use(new GoogleStrategy({
  callbackURL: 'https://localhost:5000/oauth/callback',
  clientID : keys.client_id,
  clientSecret : keys.client_secret
},(accessToken,refreshToken,profile,done) => {
  //res.send(profile);
  console.log(profile);
}));
