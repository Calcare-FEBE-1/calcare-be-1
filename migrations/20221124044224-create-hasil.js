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
        type: Sequelize.INTEGER
      },
      total_kalori: {
        type: Sequelize.FLOAT
      },
      total_protein: {
        type: Sequelize.FLOAT
      },
      total_karbohidrat: {
        type: Sequelize.FLOAT
      },
      total_lemak: {
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