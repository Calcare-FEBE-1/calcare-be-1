const express = require("express");
const router = express.Router();

const makananRouter = require('./makananRouter')

// localhots:3000
router.get("/", (req, res) => {
  res.send("This is homepage");
});
// "/makanan"
router.get('/makanan', makananRouter)

// Eksport router 
module.exports = router
