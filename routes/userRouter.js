const express = require("express");
const router = express.Router();
// Auth dan authorization
const { verifyToken, allowedAdmin, allowedUser } = require("../middlewares");
const {
  getAllUser,
  getUserByID,
//   deleteUserByID,
  updateUserByID,
} = require("../controllers/userController");

//user/all
router.get("/all", [verifyToken, allowedAdmin], getAllUser);
//user/:id
router.get("/:id", [verifyToken, allowedUser], getUserByID);
//user/:id
router.put("/:id", [verifyToken, allowedUser], updateUserByID);
//user/:id
// router.delete('/:id', [verifyToken, allowedUser], deleteUserByID)

module.exports = router;
