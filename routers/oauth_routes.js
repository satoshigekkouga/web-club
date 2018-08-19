const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/',passport.authenticate('google',{
  scope : ['profile']
}));

router.get('/callback',passport.authenticate('google'),(req,res) => {
  console.log('not the callback');
});

module.exports = router;
