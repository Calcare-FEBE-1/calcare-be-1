const express = require("express");
const router = express.Router();

// Memanggil function dari direktori sebelah
const {
    getAllUser,
    getUserByID,
    deleteUserByID,
    updateUserByID,
} = require('../controllers/userController')

// /makanan/all
router.get('/all', getAllUser)
// /makanan/:id
router.get('/:id', getUserByID)
// /makanan/:id
router.delete('/:id', deleteUserByID)
// /makanan/:id
router.put('/:id', updateUserByID)

module.exports = router