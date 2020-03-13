var mongoose = require('mongoose')
/*
mongodb는 원칙적으로 table 구조가 없는 상태인데
mongoose를 사용함으로써 마치 RDBMS처럼 table 구조를 
생성하여 사용한다

사용중에 collection 구조를 변경(칼럼추가,삭제,이름변경)등을 했을때
변경한 구조가 실제 db에 반영이 안되거나 데이터가 잘못 추가되는 경우가 있다
그럴때는 mongoDB 콘솔에서 collection을 삭제하고
다시 프로젝트를 실행해줘야 한다
db.tbl_galleries.remove({}) 명령 실행
*/
var galleryVO = mongoose.Schema({

    gStrTitle : String,
    gStrText : String,
    gUploadPhotoName : String,//이미지를 업로드 할떄 변환된 이름
    gOriginalPhotoName : String,// 원본이미지 이름
    gUploadStartDate : {
        type : Date,
        default : Date.now()
    }

})

module.exports = mongoose.model("tbl_gallery",galleryVO)