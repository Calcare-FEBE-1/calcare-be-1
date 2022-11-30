const models = require("../models");
const { Admin } = models;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
const { generateToken, verifyToken } = require("../middlewares");
const { res_error, res_success } = require("../Response");

module.exports = {
  getAllAdmin: async (req, res) => {
    const admins = await Admin.findAll();
    res.json({
      message: "success get data",
      data: admins,
    });
  },

  getAdminByID: async (req, res) => {
    const { id } = req.params;
    const admin = await Admin.findByPk(id);

    res.json({
      message: "success get data admin by id",
      data: admin,
    });
  },
  deleteAdminByID: async (req, res) => {
    try {
      await Admin.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.json({
        message: "Admin Deleted",
      });
    } catch (err) {
      console.log(err);
    }
  },
  updateAdminByID: async (req, res) => {
    try {
      await Admin.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.json({
        message: "Admin Update",
      });
    } catch (err) {
      console.log(err);
    }
  },

  registerAdmin: async (req, res) => {
    const { nama_admin, email_admin, password_admin } = req.body;
    if (password_admin !== password_admin) return res.status(400).json({ msg: "Password salah" });
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password_admin, salt);
    try {
      await Admin.create({
        nama_admin: nama_admin,
        email_admin: email_admin,
        password_admin: hashPassword,
      });
      res.json({ msg: "Register Berhasil" });
    } catch (error) {
      console.log(error);
    }
  },

  loginAdmin: async (req, res) => {
    try {
      let { email_admin, password_admin } = req.body;
      const existAdminemail = await Admin.findOne({ where: { email_admin: email_admin } });
      if (existAdminemail !== null) {
        let compare = bcrypt.compareSync(password_admin, existAdminemail.password_admin);
        if (compare) {
          const tokenAdmin = {
            _id: existAdminemail._id,
            role: "admin",
          };
          const createToken = generateToken(tokenAdmin);
          res.status(200).send({ message: "welcome", token: createToken });
        } else {
          res.send("invalid");
        }
      } else {
        res.send("invalid");
      }
      // else {
      //   res.send("Admin is not exist");
      // }
    } catch (error) {
      res.status(500).send({ err: error });
    }
  },
};
