var mongoose = require('mongoose')

var bookVO = mongoose.Schema({
    title : String,
    link : String,
    image : String,
    author : String,
    price : Number,
    discount : Number,
    publisher : String,
    isbn : Number,
    description : String
    //pubdate : 
    
})

module.exports = mongoose.model('tbl_naver_book',bookVO)