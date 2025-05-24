const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const urlRouter = require("./routes/url");
const userRouter = require("./routes/user");
const app = express();
const cors = require("cors");
const staticRouter = require("./routes/staticRoutes");
const { VerifyToken } = require("./Middlewares/verifyUser");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {};
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true,
  })
);
require("./Database/db.js");
const PORT = 3000;
app.use("/urls", VerifyToken, urlRouter);
app.use("/user", userRouter);
app.use("/", VerifyToken,staticRouter);
app.listen(PORT, () => {
  console.log("port started");
});
