const express = require("express");
const router = express.Router();
const models = require('../models');
// const { Admin } = models;
const jwt = require("jsonwebtoken");
// const Admins = require("../models/admin");

// const KEY = "asdfjsdaklf234234";

// Memanggil function dari direktori sebelah
const {
    getAllAdmin,
    getAdminByID,
    deleteAdminByID,
    updateAdminByID,
    registerAdmin,
    loginAdmin,
} = require('../controllers/adminController')

// /admin/all
router.get('/', getAllAdmin)
// /admin/:id
router.get('/:id', getAdminByID)
// /admin/:id
router.delete('/:id', deleteAdminByID)
// /admin/:id
router.put('/:id', updateAdminByID)
//register Admin
router.post("/register", registerAdmin);
// login admin
router.post("/login", loginAdmin);


// http://localhost:3000/auth/login
// router.post("/login", (req, res) => {

//     const token = jwt.sign(
//       {
//         id: Admin,
//       },
//       KEY
//     );
  
//     if (Admin) {
//       res.json({
//         message: "success login Admin",
//         token,
//       });
//     }  else {
//         res.status(401).json({
//           message: "email or password are incorrect",
//         });
//       }
//     });
    
module.exports = router