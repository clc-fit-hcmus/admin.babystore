var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/staff-list', function(req, res, next) {
  res.render('staffs/staff-list');
});

router.get('/register', function(req, res, next) {
  res.render('staffs/register');
});

router.get('/up', function(req, res, next) {
  res.render('staffs/signUp');
});

router.get('/inventory', function(req, res, next) {
  res.render('repository/inventory');
});

module.exports = router;
