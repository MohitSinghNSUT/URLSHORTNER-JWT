const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const userLogin = async (req, res) => {
  try {
    console.log(req.body);

    const findUser = await userModel.findOne({ email: req.body.email });
    console.log("login", findUser);
    if (!findUser) {
      return res.status(400).send({ error: "User Not Found" });
    }
    const payload = { email: findUser.email, id: findUser._id };
    jwt.sign(
      payload,
      process.env.TOKEN_KEY,
      { expiresIn: "1d" },
      (err, token) => {
        if (err) {
          return res.status(500).send({ error: "Token generation failed" });
        } else {
          res.cookie("unique_id", token); // Use secure: true in production
          return res.status(200).send({ msg: "User Logged In", token });
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Server Error" });
  }
};
const userSignUp = async (req, res) => {
  console.log(req.body);
  const user = req.body;
  try {
    if (await userModel.findOne(user)) {
      console.log("user found ", user);
      res.send({ msg: "User present" });
    }
    const userCreated = await userModel.create(user);
    console.log(userCreated);
    res.send({});
  } catch (error) {
    console.log(error, error.name);
    if (error.name === "ValidationError") {
      const errorMessages = Object.values(error.errors).map(
        (err) => err.message
      );

      return res.status(400).json({
        success: false,
        errors: errorMessages,
      });
    }

    // Other (non-validation) errors
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  userLogin,
  userSignUp,
};
