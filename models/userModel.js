const mongoose = require("mongoose");
const validator = require("validator");
const user = {
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password Must be Greater than 6 "],
  },
};
const userSchema = new mongoose.Schema(user);
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
