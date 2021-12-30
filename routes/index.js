var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/staff-list', function(req, res, next) {
  res.render('staffs/staff-list');
});

module.exports = router;
