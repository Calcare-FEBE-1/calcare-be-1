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
        allowNull: false
      },
      kalori: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      protein: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      lemak: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      karbohidrat: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      link_gambar: {
        type: Sequelize.TEXT,
        allowNull: false
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
