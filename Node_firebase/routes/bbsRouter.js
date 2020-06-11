var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.render("bbs/list");
});

router.get("/input", (req, res) => {
  res.render("bbs/write");
});

module.exports = router;
