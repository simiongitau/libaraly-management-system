const mongoose = require("mongoose");
const validator = require("validator");
const regSchema = mongoose.Schema({
  role: {
    type: String,
    minlenth: 3,
    maxlength: 20,
    required: true,
    default: "user",
  },
  email: {
    type: String,
    validator(value) {
      if (!validator.isEmail(value)) {
        throw new Error(`Email is not valid`);
      }
    },
  },
  confirm: {
    type: String,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
});
// model is used to store data in database
const Register = mongoose.model("Register", regSchema);
// exporting
module.exports = Register;
