var mongoose = require("mongoose");

var comicSchema = new mongoose.Schema({
  title: {  type: String },
  issue: String,
  release_date: Date,
  publisher: String,
  link : String
});

var Comic = mongoose.model('Comic', comicSchema);

module.exports = {
  Comic: Comic
}