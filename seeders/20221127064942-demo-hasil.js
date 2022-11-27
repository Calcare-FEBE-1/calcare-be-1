"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("hasils", [
      {
        keranjangId: 1,
        total_kalori: 300,
        total_protein: 300,
        total_karbohidrat: 300,
        total_lemak: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        keranjangId: 2,
        total_kalori: 400,
        total_protein: 400,
        total_karbohidrat: 400,
        total_lemak: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        keranjangId: 3,
        total_kalori: 500,
        total_protein: 500,
        total_karbohidrat: 500,
        total_lemak: 500,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("hasils", null, {});
  },
};
