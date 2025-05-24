const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  console.log(req.cookies, "from user verify");
  const token = req.cookies?.unique_id;
  if (!token) {
    return res.status(401).send({ error: "Please login again." });
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).send({ error: "Invalid token" });
    }

    console.log(decoded, "from verify token");
    req.user = decoded;
    next();
  });
};

module.exports = {
  VerifyToken,
};
