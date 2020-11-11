var express = require('express');
var router = express.Router();
var os = require("os");

router.get('/', function(req, res, next) {
  const VECTOR_LENGTH = 1e6;
  var randomArray = Array.from(Array(VECTOR_LENGTH)).map(x => Math.random());
  var result = randomArray.reduce((a, b) => a + b, 0);
  res.render('index', { title: 'Demo Web', hostname: os.hostname(), number: result });
});

router.get('/health', function(req, res, next) {
  res.status(200).send("ok");
});

module.exports = router;
