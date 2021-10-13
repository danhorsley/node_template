var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/myl', function(req, res, next) {
  res.render('myl', { title: 'my layout' });
});

module.exports = router;
