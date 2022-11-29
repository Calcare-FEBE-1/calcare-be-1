const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
// const models = require('../models');
// const { User } = models;
const UsersController = require("../controllers/loginGoogle");
const { verifyToken, verifyTokenWithId } = require("../middlewares");
const {login, register, loginByGoogle} = require(('../controllers/authController'))

const { registerUser, loginUser } = require("../controllers/authController");


// http://localhost:3000/auth/register
router.post("/register", registerUser);


router.post("/google", UsersController.loginByGoogle);
router.post("/login", login);
router.post("/register", register);




module.exports = router;