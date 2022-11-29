const express = require("express");
const router = express.Router();

const makananRouter = require("./makananRouter");
const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");
const authRouter = require("./authRouter");
const hasilRouter = require("./hasilRouter");
const keranjangRouter = require("./keranjangRouter");

// localhots:3000
router.get("/", (req, res) => {
  res.send("This is homepage");
});
// "/makanan"
router.use("/makanan", makananRouter);

// "/user"
router.use("/user", userRouter);

// "/admin"
router.use("/admin", adminRouter);

// "/auth"   --> Untuk login dan register
router.use("/auth", authRouter);

// "/hasil"
router.use("/hasil", hasilRouter);

// "/keranjang"
router.use("/keranjang", keranjangRouter);

// Eksport router
module.exports = router;
