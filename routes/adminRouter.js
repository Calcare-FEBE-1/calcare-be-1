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


module.exports = router