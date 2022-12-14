"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      tinggi_badan: DataTypes.INTEGER,
      berat_badan: DataTypes.INTEGER,
      umur: DataTypes.STRING,
      jenis_kelamin: DataTypes.STRING,
      aktivitas_fisik: DataTypes.STRING,
      // kebutuhanKalori: DataTypes.FLOAT,
      // kebutuhanLemak: DataTypes.FLOAT,
      // kebutuhanProtein: DataTypes.FLOAT,
      // kebutuhanKarbohidrat: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
