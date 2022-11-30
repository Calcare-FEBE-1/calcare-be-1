"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Keranjang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Relasi dengan table users
      this.belongsTo(models.User);
    }
  }
  Keranjang.init(
    {
      jmlh_makanan: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      makananId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Keranjang",
    }
  );
  return Keranjang;
};
