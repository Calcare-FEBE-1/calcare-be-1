const express = require("express");
const router = express.Router();
const { getAllHasil, getHasilByID, deleteHasilByID, updateHasilByID } = require("../controllers/hasilController");
const { verifyToken, allowedUser } = require("../middlewares");

// /makanan/all
router.get("/all", [verifyToken, allowedUser], getAllHasil);
// /makanan/:id
router.get("/:id", [verifyToken, allowedUser], getHasilByID);
// /makanan/:id
// router.delete('/:id',[verifyToken, allowedUser], deleteHasilByID)
// /makanan/:id
router.put("/:id", [verifyToken, allowedUser], updateHasilByID);

module.exports = router;
