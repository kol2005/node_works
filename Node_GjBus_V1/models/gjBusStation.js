var mongoose = require('mongoose')

var gjStationVO = mongoose.Schema({

    STATION_NUM : String,
    BUSSTOP_ID : String,
    BUSSTOP_NAME : String,
    NAME_E : String,
    LONGITUDE : String,
    LATITUDE : String,
    ARS_ID : String,
    NEXT_BUSSTOP : String

})

module.exports = mongoose.model('gjstation',gjStationVO)