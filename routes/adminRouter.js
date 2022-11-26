const express = require("express");
const router = express.Router();

// Memanggil function dari direktori sebelah
const {
    getAllAdmin,
    getAdminByID,
    deleteAdminByID,
    updateAdminByID,
} = require('../controllers/adminController')

// /makanan/all
router.get('/', getAllAdmin)
// /makanan/:id
router.get('/:id', getAdminByID)
// /makanan/:id
router.delete('/:id', deleteAdminByID)
// /makanan/:id
router.put('/:id', updateAdminByID)

module.exports = router