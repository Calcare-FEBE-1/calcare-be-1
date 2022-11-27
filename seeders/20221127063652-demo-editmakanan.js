"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("editmakanans", [
      {
        adminId: 1,
        makananId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        adminId: 1,
        makananId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        adminId: 2,
        makananId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("editmakanans", null, {});
  },
};
