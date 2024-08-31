'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class historyEquipament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  historyEquipament.init({
    idHistory: DataTypes.INTEGER,
    codProd: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    returnDate: DataTypes.DATE,
    entryDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'historyEquipament',
  });
  return historyEquipament;
};