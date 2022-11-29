const express = require("express");
const router = express.Router();
// Auth
const { verifyToken, allowedAdmin, allowedUser } = require("../middlewares");

const { getAllKeranjang, getKeranjangByUserID } = require("../controllers/keranjangController");

// "/keranjang"
router.get("/", getAllKeranjang);
// "/keranjang/:id"
// router.get("/:id", [verifyToken, allowedUser], getKeranjangByID);
router.get("/:id", getKeranjangByUserID);

module.exports = router;
