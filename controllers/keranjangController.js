const models = require("../models");
const { Keranjang, User } = models;

module.exports = {
  getAllKeranjang: async (req, res) => {
    try {
      const keranjangs = await Keranjang.findAll({ include: User });
      // Untuk mengambil satu atau beberapa data saja
      //   makanans.forEach((el, index) => {
      //     console.log(keranjangs[index].nama_makanan);
      //   });
      // console.log("Udah di sini");
      res.status(200).json({
        message: "Berhasil dapat semua keranjang",
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
    const { id } = req.params;
    try {
      const keranjang = await Keranjang.findOne({ where: { id: id } }, { include: User });
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
