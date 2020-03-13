var express = require('express')
var router = express.Router()
var galleryVO = require('../models/galleryVO')

var path = require("path")

// 파일(이미지) 업ㄹ드를 위해서 multer를 설정하기
var multer = require('multer')

// 파일을 "어디에 어떻게" 업로드 할 것인가를 설정하는 객체를 만들기
// destination : 어디에 저장할 것인가에 대한 실행코드
// filename : 업로드할때 원본파일이름 -> uploadFileName으로 변경하는 코드가 있고
//              그 코드에서 fileName을 생성해준다
//              filename : 업로드할때 변환된 파일정보
var saveOptions = multer.diskStorage({
    destination : (req,file,callBackFunc) =>{
        var uploadPath = path.join(__dirname,"/../","public","uploads")
        // Node_Gallery_V1/public/uploads 형식으로 문자열 생성
        console.log(uploadPath)
        callBackFunc(null,uploadPath)
    },
    filename : (req,file,callBackFunc) =>{
        // 업로드된 파일이름을 변환하여 해킹에 대비
        var uploadFileName = Date.now() + "_" + file.originalname
        callBackFunc(null,uploadFileName)
    }
})

// 실제로 파일을 업로드하는 함수
var saveFile = multer({storage:saveOptions}).single("gOriginalPhotoName")

router.get("/",(req,res)=>{
    res.render('index')
})

router.get("/upload",(req,res)=>{
    var gallery = new galleryVO()
    res.render('gallery/upload',{gallery:gallery})

})

/*
파일 업로드 하기
1. multer를 사용해서 생성해둔 saveFile()함수를 사용해서
파일을 업로드 하고
2. saveFile() callback 함수내에서 변경된 파일이름을 추출하고
3. DB에 저장
*/
router.post("/upload",(req,res)=>{
    saveFile(req,res,(err)=>{
        if(err){
            console.log(err)
            res.send('파일 업로드 오류')
        }
        else{
            // 원래 req.file객체는 
            // web form에서 업로드한 파일에 대한 정보만 담겨있다
            // 그중 .originalname은 원본 파일이름이다
            let originalname = req.file.originalname
            // 마치 web form에 input tag에 gOriginalPhotoName tag가
            // 원래 있었던것 처럼 새로운 변수가 추가되고 그곳에 originalname 값이 세팅
            req.body.gOriginalPhotoName = originalname
            // 원래 tag에 있던 gUploadPhotoName에는
            // 새로 변경된 파일 이름을 저장해 둔다
            // req.file.filename은 saveOptions에
            // 설정된 filename : 의 값이 세팅되어 있다
            req.body.gUploadPhotoName = req.file.filename

            var vo = new galleryVO(req.body)
            vo.save((err,data)=>{
                res.redirect('/gallery')
            })
        }
    })
})

module.exports = router