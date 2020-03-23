const mongoose = require("mongoose");
const bucketVO = mongoose.Schema({
  b_bucket: String,
  b_text: String,
  b_date: String,
  b_checked: String
});

module.exports = mongoose.model("tbl_bucket", bucketVO);
