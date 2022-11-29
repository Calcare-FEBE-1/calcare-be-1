'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  addUser.init({
    aktivitas_fisik: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'addUser',
  });
  return addUser;
};