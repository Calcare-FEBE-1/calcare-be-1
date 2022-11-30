const express = require("express");
const router = express.Router();
// Auth dan author
const { verifyToken, allowedAdmin, allowedUser } = require('../middlewares')

// Memanggil function dari direktori sebelah
const {
    getAllUser,
    getUserByID,
    deleteUserByID,
    updateUserByID,
} = require('../controllers/userController')

//user/all
router.get('/all', [verifyToken, allowedAdmin], getAllUser)
//user/:id
router.get('/:id', [verifyToken, allowedUser], getUserByID)
//user/:id
router.put('/:id', [verifyToken, allowedUser], updateUserByID)
//user/:id
// delete user dimatikan dulu
// router.delete('/:id', [verifyToken, allowedUser], deleteUserByID)

module.exports = router