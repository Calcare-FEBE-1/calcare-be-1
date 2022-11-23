const express = require("express");
const router = express.Router();

// Memanggil function dari direktori sebelah
const {
    getAllMakanan,
    getMakananByID,
    deleteMakananByID,
    updateMakananByID,
} = require('../controllers/makananController')

// /makanan/all
router.get('/all', getAllMakanan)
// /makanan/:id
router.get('/:id', getMakananByID)
// /makanan/:id
router.delete('/:id', deleteMakananByID)
// /makanan/:id
router.put('/:id', updateMakananByID)

module.exports = router