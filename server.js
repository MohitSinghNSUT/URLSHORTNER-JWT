const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const router = require("./routes/url");
const app = express();
require("./Database/db.js");
const PORT = 3000;
app.use(express.json());
app.use("/urls", router);
app.listen(PORT, () => {
  console.log("port started");
});
