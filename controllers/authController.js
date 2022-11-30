const models = require("../models");
const { User } = models;
require("dotenv").config();
const { generateToken } = require("../middlewares");

// Token
// const jwt = require("jsonwebtoken");
const saltRounds = 10;
const bcrypt = require("bcryptjs");

module.exports = {
  // untuk register user baru yang belum pernah terdaftar
  registerUser: async (req, res) => {
    const newUser = req.body;
    /* newUser berisi { 
      nama, 
      email, 
      password, 
      tinggi_badan, 
      berat_badan, 
      umur, 
      jenis_kelamin, 
      aktivitas_fisik 
    }
    */
    const salt = await bcrypt.genSalt(saltRounds);
    const hashPassword = await bcrypt.hash(newUser.password, salt);
    try {
      // Insert ke DB table users
      await User.create({
        nama: newUser.nama,
        email: newUser.email,
        password: hashPassword,
        tinggi_badan: newUser.tinggi_badan,
        berat_badan: newUser.berat_badan,
        umur: newUser.umur,
        jenis_kelamin: newUser.jenis_kelamin,
        aktivitas_fisik: newUser.aktivitas_fisik,
      });
      res.status(201).json({
        msg: "Register success",
      });
      console.log("Register success");
    } catch (error) {
      res.status(500).json({
        msg: "Internal Server Error",
      });
      console.log("Ada error nih: ", error);
    }
  },
  // untuk login user yang sudah terdaftar / register
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    try {
      // Mengecek email
      const isUserExist = await User.findOne({ where: { email: email } });
      if (isUserExist) {
        // Cek pass : apakah sama ?
        const compare = bcrypt.compareSync(password, isUserExist.password);
        if (compare) {
          // Membuat token untuk authorization
          const tokenUser = {
            id: User.id,
            email: User.email,
            role: "user",
          };
          const createToken = generateToken(tokenUser);
          res.status(200).json({
            message: "Success login as User",
            token: createToken,
          });
          console.log("Success login as User");
        } else {
          res.status(401).json({
            msg: "Your email or password are incorrect",
          });
        }
      } else {
        res.status(404).json({
          msg: "User not found",
        });
      }
    } catch (error) {
      console.log(error, "Ada error nih");
      res.status(500).json({ error: error });
    }
  },
};
