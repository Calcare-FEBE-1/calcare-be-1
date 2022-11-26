'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert("admins",[
      {
        nama_admin: "Puput",
        email_admin: "puput@gmail.com",
        password_admin: "12345",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama_admin: "ilham",
        email_admin: "ilham@gmail.com",
        password_admin: "223344",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    
  }
};