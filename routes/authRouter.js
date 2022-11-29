const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
// const models = require('../models');
// const { User } = models;
const UsersController = require("../controllers/loginGoogle");
const { verifyToken, verifyTokenWithId } = require("../middlewares");
const {login, register, loginByGoogle} = require(('../controllers/authController'))


router.post("/google", UsersController.loginByGoogle);
router.post("/login", login);
router.post("/register", register);


// ini aku matiin karena pas masukin email dan password yang salah masih tetep masuk ga ngedetek eror terussss
// const KEY = "asdfjsdaklf234234";

// http://localhost:3000/auth/loginyz
// router.post("/login", (req, res) => {
// try {
//     const token = jwt.sign(
//         {
//           id: User,
//         },
//         KEY
//       );
    
//       if (User) {
//         res.json({
//           message: "success login User",
//           token,
//         });
//       }  else {
//         res.send("invalid");
//       } 
    
// }  catch (error) {
//     res.status(500).send({ err: error });
// }
    
// });


module.exports = router;