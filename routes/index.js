const express = require("express");
const router = express.Router();

const makananRouter = require("./makananRouter");
const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");
const authRouter = require("./authRouter");
const hasilRouter = require("./hasilRouter");
const keranjangRouter = require("./hasilRouter");

// localhots:${PORT}
router.get("/", (req, res) => {
  res.send("Welcome to calCare Homepage");
});
// "/auth"   --> Untuk login dan register
router.use("/auth", authRouter);
// "/user"
router.use("/user", userRouter);
// "/admin"
router.use("/admin", adminRouter);
// "/makanan"
router.use("/makanan", makananRouter);
// "/makanan"
router.use("/keranjang", keranjangRouter);
// "/hasil"
router.use("/hasil", hasilRouter);

// Eksport router
module.exports = router;
