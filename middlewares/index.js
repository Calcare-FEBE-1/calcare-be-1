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
        next();
        // console.log("Verified Token");
      } else {
        res.status(406).json({
          msg: "Invalid token",
        });
        console.log("Invalid Token");
        res.end();
      }
    } catch (error) {
      res.status(401).json({
        msg: "Unauthorized",
        error: error,
      });
      console.log("Unauthorized");
      res.end();
    }
  },
  // Cek bagian admin
  allowedAdmin: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const verify = jwt.verify(token.split(" ")[1], SECRET_KEY);
      if (verify.data.role === "admin") {
        next();
        // console.log("Verified as admin");
      } else {
        res.status(403).json({
          msg: "Forbidden Admin",
        });
        console.log("Forbidden Admin");
        res.end();
      }
    } catch (error) {
      res.status(500).json({
        msg: "Internal Server Error",
        error: error,
      });
      console.log("Internal Server Error");
      res.end();
    }
  },
  //   Cek bagian user
  allowedUser: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const verify = jwt.verify(token.split(" ")[1], SECRET_KEY);
      if (verify.data.role === "user") {
        next();
        // console.log("Verified as user");
      } else {
        res.status(403).json({
          msg: "Forbidden User",
        });
        console.log("Forbidden User");
        res.end();
      }
    } catch (error) {
      res.status(500).json({
        msg: "Internal Server Error",
        error: error,
      });
      console.log("Internal Server Error");
      res.end();
    }
  },
};
