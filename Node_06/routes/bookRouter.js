// express framework 를 사용한 router 생성
var express = require("express")
var router = express.Router()

var bookVO = require("../models/bookVO")

// selectAll 전체리스트
router.get("/",function(req,res){
    bookVO.find({},function(err,books){
        res.render("book/list",{books:books})
    })
})
// 추가(insert) 화면 보여주기
router.get("/insert",function(req,res){
    var book = new bookVO()
    res.render("book/write",{book:book,formTitle:'INSERT'})
})
// 추가 화면에서 저장 버튼을 클릭했을때
router.post("/insert",function(req,res){
    var book = new bookVO(req.body)
    book.save(function(err,data){
        res.redirect("/book")
    })
})
// 변경,수정(update) 화면 보여주기
router.get("/update/:id",function(req,res){
    bookVO.findOne({_id:req.params.id},function(err,book){
        res.render("book/write",{book:book,formTitle:'UPDATE'})
    })
})
// 수정 화면에서 저장 버튼을 클릭했을때
router.post("/update/:id",function(req,res){
    res.end("update")
})
// 삭제
router.get("/delete/:id",function(req,res){
    res.end("delete")
})

module.exports = router