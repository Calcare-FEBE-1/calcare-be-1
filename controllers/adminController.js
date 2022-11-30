const models = require("../models");
const { Admin } = models;
require("dotenv").config();
const { SECRET_KEY } = process.env;
// Token
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const bcrypt = require("bcryptjs");

module.exports = {
  // Menambahkan admin oleh admin lain
  addAdmin: async (req, res) => {
    const { nama_admin, email_admin, password_admin } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password_admin, salt);
    try {
      // Inser ke DB table admins
      await Admin.create({
        nama_admin: nama_admin,
        email_admin: email_admin,
        password_admin: hashPassword,
      });
      res.status(201).json({
        msg: "New admin added successfully",
      });
    } catch (error) {
      res.status(500).json({
        msg: "Internal Server Error",
      });
      console.log("Ada error nih: ", error);
    }
  },
  getAllAdmin: async (req, res) => {
    try {
      const admins = await Admin.findAll();
      res.status(200).json({
        msg: "Success Get All Admin",
        data: admins,
      });
    } catch (error) {
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  },
  // Mengambil 1 data admin
  getAdminByID: async (req, res) => {
    const { id } = req.params;
    const admin = await Admin.findOne(id);
    res.status(200).json({
      msg: "Success get data admin by id",
      data: admin,
    });
  },
  // Menghapus admin dari table admins
  deleteAdminByID: async (req, res) => {
    try {
      await Admin.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        msg: "Admin was deleted",
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  // Mengupdate data admin
  updateAdminByID: async (req, res) => {
    try {
      await Admin.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).json({
        msg: "Your admin profile success updated",
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  },
  // Login sebagai admin
  loginAdmin: async (req, res) => {
    const { email_admin, password_admin } = req.body;
    try {
      // Cek email
      const isAdminExist = await Admin.findOne({ where: { email_admin: email_admin } });
      if (isAdminExist) {
        const compare = bcrypt.compareSync(password_admin, isAdminExist.password_admin);
        if (compare) {
          // Membuat token untuk authorization
          const token = jwt.sign(
            {
              id: Admin.id,
              email: Admin.email_admin,
            },
            SECRET_KEY,
            { expiresIn: "1h" }
          );
          res.status(200).json({
            message: "Success login as Admin",
            role: "admin",
            token,
          });
          console.log("Success login as Admin");
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
      res.status(500).send({ error: error });
    }
  },
};
