const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then((Res) => {
    console.log("database connected ");
  })
  .catch(() => {
    console.log("error in connecting db");
  });
