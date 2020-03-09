var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var book = {
    bTitle : '타이틀',
    bWriter : '홍길동',
    bComp : '출판사',
    bPrice : 2020
  }

  var books = [
    {name : 'K1'},
    {name : '<b>K2</b>'},
    {name : 'K3'},
    {name : 'K4'},
    {name : 'K5'},
  ]
  
  res.render('index', { title: '도서정보 관리' });
});

module.exports = router;
