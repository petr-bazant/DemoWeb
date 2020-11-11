var express = require('express');
var router = express.Router();
var os = require("os");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Very special page', hostname: os.hostname() });
});

module.exports = router;
