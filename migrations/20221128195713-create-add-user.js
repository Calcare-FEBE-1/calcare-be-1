"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      // queryInterface.addColumn("Users", "aktivitas_fisik", {
      //   type: Sequelize.STRING,
      //   allowNull: false,
      // }),
      // queryInterface.addColumn("Users", "createdAt", {
      //   type: Sequelize.DATE,
      //   allowNull: false,
      // }),
      queryInterface.addColumn("Users", "updatedAt", {
        type: Sequelize.DATE,
        allowNull: false,
      }),
    ]);
  },
  async down(queryInterface, Sequelize) {
    // await queryInterface.removeColumn("Users", "aktivitas_fisik", {});
    return Promise.all([
      queryInterface.removeColumn("Users", "aktivitas_fisik"),
      // queryInterface.removeColumn("Users", "createdAt"),
      // queryInterface.removeColumn("Users", "updatedAt")
    ]);
  },
};
