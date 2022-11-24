"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Up untuk membuat database baru
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Makanans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama_makanan: {
        type: Sequelize.STRING,
      },
      kalori: {
        type: Sequelize.FLOAT,
      },
      protein: {
        type: Sequelize.FLOAT,
      },
      lemak: {
        type: Sequelize.FLOAT,
      },
      karbohidrat: {
        type: Sequelize.FLOAT,
      },
      link_gambar: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  // Down untuk menghapus database
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Makanans");
  },
};
