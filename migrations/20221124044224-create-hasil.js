'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Hasils', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_keranjang: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_kalori: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      total_protein: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      total_karbohidrat: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      total_lemak: {
        allowNull: false,
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Hasils');
  }
};