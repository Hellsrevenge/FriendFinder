var express = require('express');
var router = express.Router();
var friends = require('../models/friends');

router.get('/friends', function(req, res, next) {
  res.json(friends.all());
});

router.post('/friends', function(req, res, next) {
    res.json(friends.match(req.body));
});

module.exports = router;

