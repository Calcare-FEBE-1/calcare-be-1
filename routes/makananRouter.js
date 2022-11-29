const express = require("express");
const router = express.Router();
// Auth dan author
const { verifyToken, allowedUser, allowedAdmin } = require('../middlewares')
// Memanggil function dari direktori makananController
const {
    getAllMakanan,
    getMakananByID,
    deleteMakananByID,
    updateMakananByID,
    addMakanan,
} = require('../controllers/makananController')

// /makanan/add
router.post('/add', [verifyToken, allowedAdmin],addMakanan)
// /makanan
router.get('/', [verifyToken, allowedUser], getAllMakanan)
// /makanan/:id
router.get('/:id', getMakananByID)
// /makanan/:id
router.put('/:id',[verifyToken, allowedAdmin], updateMakananByID)
// /makanan/:id
router.delete('/:id',[verifyToken, allowedAdmin], deleteMakananByID)

module.exports = router