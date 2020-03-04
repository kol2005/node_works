var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '리퍼블릭 오브 코리아' });
});

module.exports = router;
