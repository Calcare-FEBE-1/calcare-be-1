const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./.env" });
const { SECRETKEY } = process.env;
const generateToken = (data) => {
  const token = jwt.sign({ data }, SECRETKEY, {
    expiresIn: "1h",
  });
  return token;
};
const verifyToken = (req, res, next) => {
  res.send("Disini untuk verif token");
  next();
};
const allowedUser = (req, res, next) => {
  res.send("Disini untuk izin user");
  next();
};
const allowedAdmin = (req, res, next) => {
  res.send("Disini untuk izin admin");
  next();
};

module.exports = { verifyToken, allowedUser, allowedAdmin };
