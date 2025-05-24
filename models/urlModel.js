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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
};

const urlSchema = new mongoose.Schema(url);
const urlModel = mongoose.model("urls", urlSchema);
module.exports = urlModel;
