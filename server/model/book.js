const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Desc: {
    type: String,
    required: true,
  },
  DateOfPusbisher: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  categorly: {
    type: String,
  },
});
// model is used to store data in database
const Book = mongoose.model("Book", bookSchema);
// exporting
module.exports = Book;
