const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");

// http://localhost:3000/auth/register
router.post("/register", registerUser);

// http://localhost:3000/auth/login
router.post("/login", loginUser);

module.exports = router;