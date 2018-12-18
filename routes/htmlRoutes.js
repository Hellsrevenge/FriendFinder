var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/survey', function(req, res, next) {
    res.render('survey');
});

module.exports = router;
