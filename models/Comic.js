var mongoose = require("mongoose");

var comicSchema = new mongoose.Schema({
  title: {  type: String },
  issue: String,
  release_date: String,
  publisher: String,
  link : String,
  last_updated : { type: Date, default: Date.now }
});

var Comic = mongoose.model('Comic', comicSchema);

module.exports = {
  Comic: Comic
};