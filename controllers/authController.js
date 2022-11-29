const models = require("../models");
const { User } = models;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const env = require('dotenv');
const { generateToken, verifyToken } = require("../middlewares");


// untuk register user baru yang belum pernah login / register
const registerUser = async (req, res) => {
  const { nama, email, password, tinggi_badan, berat_badan, umur, jenis_kelamin, aktivitas_fisik } = req.body;
  if (password !== password) return res.status(400).json({ msg: "Password salah" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);
  try {
    await User.create({
      nama: nama,
      email: email,
      password: hashPassword,
      tinggi_badan: tinggi_badan,
      berat_badan: berat_badan,
      umur: umur,
      jenis_kelamin: jenis_kelamin,
      aktivitas_fisik: aktivitas_fisik,
    });
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.log(error);
  }
};

// untuk login user yang sudah pernah register
const loginUser = async (req, res) => {
  try {
    // Membuat token untuk authorization
    const token = jwt.sign(
      {
        id: User,
      },
      KEY
    );
    if (User) {
      res.json({
        message: "Success login as User",
        token,
      });
    } else {
      res.send("Your Email or Password incorrect");
    }
    let { email, password } = req.body;
    const existUseremail = await User.findOne({ where: { email: email } });
    if (existUseremail !== null) {
      let compare = bcrypt.compareSync(password, existUseremail.password);
      if (compare) {
        const tokenUser = {
          _id: existUseremail._id,
          role: "users",
        };
        // const createToken = generateToken(tokenUser);
        res.status(200).send({ message: "welcome" });
      } else {
        res.send("invalid");
      }
    } else {
      res.send("user is not exist");
    }
  } catch (error) {
    res.status(500).send({ err: error });
  }
};

module.exports = { registerUser, loginUser };
