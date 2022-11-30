const express = require("express");
const router = express.Router();
// Auth
const { verifyToken, allowedAdmin, allowedUser } = require("../middlewares");

const { getAllKeranjang, getKeranjangByUserID } = require("../controllers/keranjangController");

//keranjang
router.get("/", [verifyToken, allowedUser], getAllKeranjang);
//keranjang/:id
// router.get("/:id", [verifyToken, allowedUser], getKeranjangByID);
//keranjang/:id
router.get("/:id", [verifyToken, allowedUser], getKeranjangByUserID);

module.exports = router;
