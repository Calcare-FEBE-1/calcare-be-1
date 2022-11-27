"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("keranjangs", [
      {
        jmlh_makanan: 1,
        userId: 1,
        makananId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jmlh_makanan: 1,
        userId: 1,
        makananId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jmlh_makanan: 1,
        userId: 1,
        makananId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jmlh_makanan: 1,
        userId: 2,
        makananId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        jmlh_makanan: 1,
        userId: 3,
        makananId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
