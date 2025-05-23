const express = require("express");
const {
  handleGenerateShortURL,
  handleRedirectToURL,
} = require("../controllers/url");
const router = express.Router();
router.post("/", handleGenerateShortURL);
router.get("/:id", handleRedirectToURL);
module.exports = router;
