const express = require("express");
const router = express.Router();

const makananRouter = require("./makananRouter");
const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");
const authRouter = require("./authRouter");
// const hasilRouter = require("./hasilRouter");
const keranjangRouter = require("./keranjangRouter");
const editMakananRouter = require("./editMakananRouter")

// localhots:${PORT}
router.get("/", (req, res) => {
  res.send("Welcome to Calcare Homepage");
});
//auth   --> Untuk login dan register
router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/admin", adminRouter);
router.use("/makanan", makananRouter);
router.use("/keranjang", keranjangRouter);
router.use("/edit-makanan", editMakananRouter);
// router.use("/hasil", hasilRouter);

module.exports = router;
