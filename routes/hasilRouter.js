const express = require("express");
const router = express.Router();

// Memanggil function dari direktori sebelah
const {
    getAllHasil,
    getHasilByID,
    deleteHasilByID,
    updateHasilByID,
} = require('../controllers/hasilController')

// /makanan/all
router.get('/all', getAllHasil)
// /makanan/:id
router.get('/:id', getHasilByID)
// /makanan/:id
router.delete('/:id', deleteHasilByID)
// /makanan/:id
router.put('/:id', updateHasilByID)

module.exports = router