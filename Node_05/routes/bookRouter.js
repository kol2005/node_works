var express = require('express');
var router = express.Router();
var bookVO = require("../models/book")

router.get("/",function(req,res){
    bookVO.find({},function(err,data){
        res.render("list",{books:data})
    })
})

router.get("/insert",function(req,res){
    var book = new bookVO()
    res.render("insert",{book:book,btnText:'추가'})
})

router.post("/insert",function(req,res){
    var newVO = new bookVO(req.body)
    newVO.save(function(err,data){
        res.redirect("/book")
    })
})

router.get("/name",function(req,res){
    let name = req.query.name
    bookVO.findOne({bTitle:name},function(err,data){
        res.json(data)
    })
})

router.get("/update/:id",function(req,res){
    let id = req.params.id
    bookVO.findOne({_id:id},function(err,data){
        res.render("insert",{book:data,btnText:'수정'})
    })
})

router.post("/update/:id",function(req,res){
    var id = req.params.id
    bookVO.update({_id:id},{$set:req.body},function(err,data){
        res.redirect("/book")
    })
})

router.get("/delete/:id",function(req,res){
    let id = req.params.id
    bookVO.deleteOne({_id:id},function(err,data){
        res.redirect("/book")
    })
})
router.post("/delete/:id",function(req,res){
    let id = req.params.id
    bookVO.deleteOne({_id:id},function(err,data){
        res.redirect("/book")
    })
})

module.exports = router