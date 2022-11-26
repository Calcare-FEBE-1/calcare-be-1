const express = require("express");
const router = express.Router();

// Memanggil function dari direktori sebelah
const {
    getAllUser,
    getUserByID,
    deleteUserByID,
    updateUserByID,
} = require('../controllers/userController')

// user/all
router.get('/', getAllUser)
// user/:id
router.get('/:id', getUserByID)
// user/:id
router.delete('/:id', deleteUserByID)
// user/:id
router.put('/:id', updateUserByID)

module.exports = router