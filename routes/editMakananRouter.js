const express = require("express");
const router = express.Router();

const { editMakananByID } = require("../controllers/editMakananController");

router.put("/:d", editMakananByID);

module.exports = router;
