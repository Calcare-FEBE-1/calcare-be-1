'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Makanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Makanan.init({
    nama_makanan: DataTypes.STRING,
    kalori: DataTypes.FLOAT,
    protein: DataTypes.FLOAT,
    lemak: DataTypes.FLOAT,
    karbohidrat: DataTypes.FLOAT,
    link_gambar: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Makanan',
  });
  return Makanan;
};