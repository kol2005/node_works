// nodejs router(controller)에서 web request 응답을 쉽게 처리할수 있도록
// 도움을 주는 미들웨어
var express = require("express")

// web request에 반응하는 이벤트 핸들러라고 봐도 된다
var router = express.Router()

// mongoose로 설정한 model을 사용하기 위해 bookVO로 객체 선언하기
var bookVO = require("../models/book")

// web 브라우저에서 localhost:3000/~~~/라고 path를 입력한 후
// enter를 눌러 요청하면 반응하는 이벤트 핸들러
// router.get() 요청은
// callback 함수에게 req,res,next 라고하는 
// 3개의 매개변수를 주입한다
// req : web으로 부터 전달된 HTTP 정보들이 들어있다
// res : 서버로부터 web에게 응답할때 필요한 HTTP 정보들이 기본적으로 포함되어있다
// req에서 필요한 정보, 데이터들을 추출하고 res에 응답할 정보, 데이터들을 추가하여
// web에게 응답을 수행한다
router.get("/",function(req,res,next){

})

// 위에서 세팅된(초기화,get() 메서드가 설정)
// router 객체를 외부에서 참조할수 있도록 내보내기를 설정
// router객체를 외부로 export 한다
module.exports = router