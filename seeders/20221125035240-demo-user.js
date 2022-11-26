'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("users", [
      {
        nama: "Puput",
        email: "puput@gmail.com",
        password: "12345",
        tinggi_badan: "150",
        berat_badan: "50",
        umur:"21",
        jenis_kelamin : "perempuan",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "ilham",
        email: "ilham@gmail.com",
        password: "222344",
        tinggi_badan: "160",
        berat_badan: "45",
        umur:"22",
        jenis_kelamin : "laki-laki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "andri",
        email: "andri@gmail.com",
        password: "123andri",
        tinggi_badan: "170",
        berat_badan: "65",
        umur:"21",
        jenis_kelamin : "laki-laki",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },


  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete("users", null, {});
  }
};
