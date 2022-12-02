const models = require("../models");
const { Keranjang, User } = models;

module.exports = {
  getAllKeranjang: async (req, res) => {
    try {
      const keranjangs = await Keranjang.findAll({ include: User });
      res.status(200).json({
        msg: "Berhasil dapat semua keranjang",
        data: keranjangs,
      });
    } catch (error) {
      res.status(404).send({
        msg: "Data not found",
        error: error,
      });
    }
  },
  getKeranjangByUserID: async (req, res) => {
    const id = req.params.id;
    try {
      const keranjang = await Keranjang.findAll({ where: { userId: id } });
      res.status(200).send({
        msg: "Succes Get Keranjang by ID ",
        keranjang: keranjang,
      });
    } catch (error) {
      res.status(404).send({
        msg: error,
      });
    }
  },
};
