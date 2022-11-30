// Token
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY } = process.env;

module.exports = {
  generateToken: (data) => {
    const token = jwt.sign({ data }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return token;
  },
  verifyToken: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const id = req.params.id;
      const verify = jwt.verify(token.split(" ")[1], SECRET_KEY);
      if (verify) {
        next();
      } else {
        res.status(500).send("invalid token");
        res.end();
      }
    } catch (error) {
      console.log(error, "error nih");
      res.status(500).send("error nih", error);
      res.end();
    }
  },
  // const dataToken = (req, res) => {
  // 	try {
  // 		const token = req.headers.authorization;
  // 		const verify = jwt.verify(token.split(" ")[1], SECRET_KEY);
  // 		return verify;
  // 	} catch (error) {
  // 		console.log("invalid token");
  // 	}
  // };
  // const verifyTokenWithId = (req, res, next) => {
  // 	try {
  // 		const token = req.headers.authorization;
  // 		const id = req.params.id;
  // 		const verify = jwt.verify(token.split(" ")[1], SECRET_KEY);
  // 		if (verify.data._id === id) {
  // 			next();
  // 		} else {
  // 			res.status(500).send("forbidden");
  // 			res.end();
  // 		}
  // 	} catch (error) {
  // 		res.status(500).send(error);
  // 		res.end();
  // 	}
  // };
  allowedAdmin: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const verify = jwt.verify(token.split(" ")[1], SECRET_KEY);
      if (verify.data.role === "admin") {
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
  allowedUser: (req, res, next) => {
    try {
      const token = req.headers.authorization;
      const verify = jwt.verify(token.split(" ")[1], SECRET_KEY);
      if (verify.data.role === "user") {
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
