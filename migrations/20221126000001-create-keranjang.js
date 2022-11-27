"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Keranjangs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      jmlh_makanan: {
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "users",
            // schema: "calcare_dev",
          },
          key: "id",
        },
        allowNull: false,
      },
      makananId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "makanans",
            // schema: "calcare_dev",
          },
          key: "id",
        },
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Keranjangs");
  },
};
