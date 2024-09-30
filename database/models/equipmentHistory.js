'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipmentHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  equipmentHistory.init({
    idEquipmentHistory: DataTypes.INTEGER,
    idEquipment: DataTypes.INTEGER,
    reason: DataTypes.STRING,
    returnDate: DataTypes.DATE,
    entryDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'equipmentHistory',
  });
  return equipmentHistory;
};