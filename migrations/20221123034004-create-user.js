"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tinggi_badan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      berat_badan: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      umur: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jenis_kelamin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aktivitas_fisik: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      kebutuhanKalori: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      kebutuhanLemak: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      kebutuhanProtein: {
        allowNull: false,
        type: Sequelize.REAL,
      },
      kebutuhanKarbohidrat: {
        allowNull: false,
        type: Sequelize.REAL,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
