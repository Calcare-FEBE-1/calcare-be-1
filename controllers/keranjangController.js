const models = require("../models");
const { Keranjang } = models;

module.exports = {
  getAllKeranjang: async (req, res) => {
    try {
      const keranjangs = await Keranjang.findAll();
      // Untuk mengambil satu atau beberapa data saja
      //   makanans.forEach((el, index) => {
      //     console.log(makanans[index].nama_makanan);
      //   });
      res.status(200).json({
        message: "Berhasil dapat semua keranjang",
        data: keranjangs,
      });
    } catch (error) {
      res.status(404).send({
        msg: error,
      });
    }
  },
  getKeranjangByUserID: async (req, res) => {
    const { id } = req.params;
    try {
      const keranjang = await Keranjang.findOne({ where: { id: id } });
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
