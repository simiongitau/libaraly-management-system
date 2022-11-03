const mongoose = require("mongoose");
const validator = require("validator");
const borrowSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  book: {
    type: String,
    required: true,
  },
  tel: {
    type: Number,
    minlength: 10,
    required: true,
  },
  dateOreturn: {
    type: String,
    required: true,
  },
  return: {
    type: String,
    default: "pending",
  },
  email: {
    type: String,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error(`Email is not valid`);
      }
    },
  },
});
// model is used to store data in database
const Borrow = mongoose.model("Borrow", borrowSchema);
// exporting
module.exports = Borrow;
