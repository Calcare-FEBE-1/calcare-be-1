const express = require("express");
const router = express.Router();

// Memanggil function dari direktori sebelah
const {
    getAllMakanan,
    getMakananByID,
    deleteMakananByID,
    updateMakananByID,
    addMakanan,
} = require('../controllers/makananController')

// /makanans/add
router.post('/add', addMakanan)
// /makanans/
router.get('/', getAllMakanan)
// /makanans/:id
router.get('/:id', getMakananByID)
// /makanans/:id
router.delete('/:id', deleteMakananByID)
// /makanans/:id
router.put('/:id', updateMakananByID)

module.exports = router