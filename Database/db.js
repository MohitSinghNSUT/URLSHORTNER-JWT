const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL)
  .then((Res) => {
    console.log("database connected ");
  })
  .catch((error) => {
    console.log("error in connecting db");
    console.log(error);
  });
