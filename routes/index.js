var express = require('express');
const csrf = require('csurf');
const passport = require('passport');
const { isLoggedIn, notLoggedIn } = require('../utils/login');

var router = express.Router();

const csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', notLoggedIn, function(req, res, next) {
  const messages = req.flash('error');
  res.render('index', { csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0 });
});

router.get('/profile', isLoggedIn, function(req, res, next) {
  const user = req.user.recordset[0];
  res.render('user/profile', { user });
});

router.get('/logout', isLoggedIn, function(req, res, next) {
  req.logout();
  res.redirect('/');
});

router.post('/', passport.authenticate('local.signin', {
  successRedirect: '/profile',
  failureRedirect: '/',
  failureFlash: true
}));

router.get('/register', function(req, res, next) {
  res.render('staffs/register');
});

router.get('/up', function(req, res, next) {
  res.render('staffs/signUp');
});

module.exports = router;
