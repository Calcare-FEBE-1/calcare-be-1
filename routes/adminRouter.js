const express = require("express");
const router = express.Router();
const { getAllAdmin, getAdminByID, deleteAdminByID, updateAdminByID, addAdmin, loginAdmin } = require("../controllers/adminController");
const { verifyToken, allowedAdmin } = require("../middlewares");

//admin/all
router.get("/", [verifyToken, allowedAdmin], getAllAdmin);
//admin/:id
router.get("/:id", [verifyToken, allowedAdmin], getAdminByID);
//admin/:id
router.delete("/:id", [verifyToken, allowedAdmin], deleteAdminByID);
//admin/:id
router.put("/:id", [verifyToken, allowedAdmin], updateAdminByID);
//admin/add
router.post("/add", [verifyToken, allowedAdmin], addAdmin);
//admin/login
router.post("/login", loginAdmin);

module.exports = router;
