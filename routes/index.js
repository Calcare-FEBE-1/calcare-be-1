const express = require("express");
const router = express.Router();

const makananRouter = require('./makananRouter')
const userRouter = require('./userRouter')
const adminRouter = require('./adminRouter')
const auths = require('./authRouter');
const hasilRouter = require('./hasilRouter')

// localhots:3000
router.get("/", (req, res) => {
  res.send("This is homepage");
});
// "/makanan"
router.get('/makanan', makananRouter)

// User
router.get('/user', userRouter)

// admin
router.get('/admin', adminRouter)

// Register-login
router.use('/auth-users', auths)

router.use('/hasil', hasilRouter)

// Eksport router 
module.exports = router
