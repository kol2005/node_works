var mong = require("mongoose")
var bookModel = mong.Schema({

    bTitle : {
        type : String,
        require : true,
        unique : true,
        trim : true
    },
    bWriter : String,
    bComp : String,
    bPrice : Number

})

module.exports = mong.model("book2",bookModel)