const models = require("../models");
const { Makanan, Keranjang, User } = models;

module.exports = {
  // nambahin makanan oleh admin
  addMakanan: async (req, res) => {
    try {
      const newMakanan = await Makanan.create(req.body);
      res.status(201).send({
        msg: "Makanan baru berhasil ditambahkan",
        makanan: newMakanan,
      });
    } catch (error) {}
  },
  // dapat semua makanan
  getAllMakanan: async (req, res) => {
    try {
      const makanans = await Makanan.findAll();
      // Untuk mengambil satu atau beberapa data saja
      makanans.forEach((el, index) => {
        console.log(makanans[index].nama_makanan);
      });
      res.status(200).json({
        message: "Berhasil dapat semua makanan",
        data: makanans,
      });
    } catch (error) {
      res.status(404).send({
        msg: error,
      });
    }
  },
  // Ambil 1 makanan
  getMakananByID: async (req, res) => {
    const { id } = req.params;
    try {
      const makanan = await Makanan.findOne({ where: { id: id } });
      // const user = User.
      if (makanan) {
        console.log("makanan :", makanan);
        Keranjang.create({
          jmlh_makanan: 1,
          userId: id,
          makananId: id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        res.send("Berhasil menambahkan makanan ke keranjang")
      } else {
        console.log("Error");
      }
      // makanan !== null
      //   ? res.status(200).json({
      //       msg: "Dapat 1 makanan",
      //       data: makanan,
      //     })
      //   : res.status(404).json({
      //       msg: `Makanan tidak ditemukan`,
      //     });
    } catch (error) {
      res.status(404).send({ msg: error });
      console.log(error);
    }
  },
  // menghapus 1 makanan
  deleteMakananByID: async (req, res) => {
    try {
      await Makanan.destroy({
        where: {
          id: req.params.id,
        },
      });
    } catch (error) {
      res.status(404).send({ msg: error });
      console.log(error);
    }
  },
  // Mengupdate 1 makanan
  updateMakananByID: async (req, res) => {
    try {
      await Makanan.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      res.status(200).send({ msg: "Makanan berhasil diperbarui" });
    } catch (error) {
      res.status(404).send({ msg: error });
      console.log(error);
    }
  },
};
