'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EquipmentRental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  EquipmentRental.init({
    idEquipmentRental: DataTypes.INTEGER,
    codProd: DataTypes.INTEGER,
    proposal: DataTypes.STRING,
    description: DataTypes.STRING,
    init: DataTypes.DATE,
    finish: DataTypes.DATE,
    entry: DataTypes.DATE,
    output: DataTypes.DATE,
    value: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'EquipmentRental',
  });
  return EquipmentRental;
};