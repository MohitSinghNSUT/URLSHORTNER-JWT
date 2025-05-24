const express = require("express");
const { userLogin, userSignUp } = require("../controllers/user");
const router = express.Router();
router.post("/signup", userSignUp);
router.post("/login", userLogin);
module.exports = router;
