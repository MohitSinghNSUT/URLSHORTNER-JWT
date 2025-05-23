const mongoose = require("mongoose");
const url = {
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectUrl: {
    type: String,
    required: true,
  },
  visitCount: {
    type: Number,
  },
};

const urlSchema = new mongoose.Schema(url);
const userModel = mongoose.model("urls", urlSchema);
module.exports = userModel;
