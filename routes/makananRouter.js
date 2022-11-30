const express = require("express");
const router = express.Router();
// Auth dan author
const { verifyToken, allowedUser, allowedAdmin } = require('../middlewares')
const {
    getAllMakanan,
    getMakananByID,
    deleteMakananByID,
    updateMakananByID,
    addMakanan,
} = require('../controllers/makananController')

//makanan
router.get('/', getAllMakanan)
//makanan/add
router.post('/add', [verifyToken, allowedAdmin],addMakanan)
//makanan/:id
router.get('/:id', [verifyToken, allowedAdmin], getMakananByID)
//makanan/:id
router.put('/:id',[verifyToken, allowedAdmin], updateMakananByID)
//makanan/:id
router.delete('/:id',[verifyToken, allowedAdmin], deleteMakananByID)

module.exports = router;