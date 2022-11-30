// Token
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY } = process.env;

module.exports = {
  // Function untuk verifikasi token
  generateToken: (data) => {
    const token = jwt.sign({ data }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return token;
  },
  // Verifikasi token
  verifyToken: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const { id } = req.params;
      const verify = jwt.verify(token.split(" ")[1], SECRET_KEY);
      if (verify) {
        console.log("Verif token");
        next();
      } else {
        res.status(500).send("invalid token");
        res.end();
      }
    } catch (error) {
      console.log(error, "error nih");
      res.status(500).send("error: ", error);
      res.end();
    }
  },
  // Cek bagian admin
  allowedAdmin: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const verify = jwt.verify(token.split(" ")[1], SECRET_KEY);
      if (verify.data.role === "admin") {
        console.log("Verif as admin");
        next();
      } else {
        res.status(500).send("forbidden user");
        res.end();
      }
    } catch (error) {
      res.status(500).send(error);
      res.end();
    }
  },
  //   Cek bagian user
  allowedUser: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const verify = jwt.verify(token.split(" ")[1], SECRET_KEY);
      if (verify.data.role === "user") {
        console.log("Verif as user");
        next();
      } else {
        res.status(500).send("forbidden admin");
        res.end();
      }
    } catch (error) {
      res.status(500).send(error);
      res.end();
    }
  },
};
