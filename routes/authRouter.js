const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");

//auth/register-user
router.post("/register-user", registerUser);
//auth/login-user
router.post("/login-user", loginUser);

module.exports = router;
