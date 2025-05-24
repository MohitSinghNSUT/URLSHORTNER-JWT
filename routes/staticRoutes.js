const express = require("express");
const { staticData } = require("../controllers/staticData");
const router = express.Router();
router.get("/", staticData);
module.exports = router;
