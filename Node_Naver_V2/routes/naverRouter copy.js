var naver = require("../config/naver_secret")
var express = require('express')
var router = express.Router()
var request = require('request')
var bookVO = require('../models/bookVO')

var reqOptions = (api_url)=>{
    var options = {
        url : api_url,
        headers : {
            'X-Naver-Client-Id' : naver.client_id,
            'X-Naver-Client-Secret' : naver.client_secret
        }
    }
    return options
}

module.exports = (app)=>{
    router.get("/book",(req,res)=>{
        let searchName = req.query.search
        let api_url = naver.book_url
        api_url += '?query=' + encodeURI(searchName)

        request.get(reqOptions(api_url),(err,response,body)=>{
            if(err){
                console.log(err)
                res.send(response.statusMessage)
            }else if(response.statusCode == 200){
                var naverJson = JSON.parse(body).items

                bookVO.find({search:searchName},(err,data)=>{
                    if(Object.keys(data).length > 0){
                        res.render('book/list',{books:naverJson})
                        return false
                    }else{

                        bookVO.collection.insertMany(naverJson,(err,result)=>{
                    if(err){
                        res.send("Data Bulk Insert Error")
                    }else{
                        // res.render('book/list',{books:result.ops})
                        res.render('book/list',{books:naverJson})
                    }
                })
                // res.render('book/list',{books:naverJson})
            }
            })
        
            }else{
                // res.send("unKnow Error response")
                res.write(naverJson)
                res.end('데이터 수신 오류')
            }
        })
    })

    

    return router
}