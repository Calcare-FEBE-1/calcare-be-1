"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert("Users", [
      {
        nama: "Puput",
        email: "puput@gmail.com",
        password: "12345",
        tinggi_badan: 150,
        berat_badan: "50",
        umur:"21",
        jenis_kelamin : "perempuan",
        aktivitas_fisik: "Jarang olahraga",
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
        aktivitas_fisik: "Sering olahraga",
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
        aktivitas_fisik: "Rutin olahraga",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    queryInterface.bulkDelete("Users", null, {});
  },
};
