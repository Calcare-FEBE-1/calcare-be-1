"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Makanans", [
      {
        nama_makanan: "Bubur Kacang Ijo",
        kalori: 200,
        protein: 109.4,
        lemak: 34.9,
        karbohidrat: 255,
        link_gambar: "google.com/bubur.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_makanan: "Tumis Kacang",
        kalori: 100,
        protein: 34,
        lemak: 78,
        karbohidrat: 67,
        link_gambar: "google.com/kacangpanjang.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // {
      //   nama_makanan: "Tempe goreng",
      //   kalori: 99,
      //   protein: 250,
      //   lemak: 21,
      //   karbohidrat: 40,
      //   link_gambar: "google.com/tempenih.jpg",
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      // },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
