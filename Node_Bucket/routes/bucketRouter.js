var express = require("express");
var router = express.Router();
var bucketVO = require("../models/bucketVO");
var moment = require("moment");
var cors = require("cors");

var app = express();
app.use(cors());
var corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200
};

require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

router.get("/", (req, res) => {
  bucketVO.find({}).exec((err, data) => {
    res.json(data);
  });
});

router.post("/", (req, res) => {
  req.body.b_date = moment().format("YYYY[-]MM[-]DD");
  var buc = new bucketVO(req.body);
  buc.save((err, data) => {
    res.json(data);
  });
});

router.put("/", (req, res) => {
  req.body.b_complite = moment().format("YYYY[-]MM[-]DD");
  console.log(req.body);
  bucketVO
    .update({ _id: req.body._id }, { $set: req.body })
    .exec((err, result) => {
      res.json(result);
    });
});

router.delete("/", (req, res) => {
  console.log("바디값:", req.body);
  bucketVO.deleteOne({ _id: req.body._id }).exec((err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }
  });
});
module.exports = router;
