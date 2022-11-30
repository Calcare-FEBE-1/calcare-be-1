const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/authController");

//auth/register
router.post("/register-user", registerUser);
//auth/login
router.post("/login-user", loginUser);

module.exports = router;
