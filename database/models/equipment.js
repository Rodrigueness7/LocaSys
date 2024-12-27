'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Equipment.init({
    idEquipment: DataTypes.INTEGER,
    codProd: DataTypes.INTEGER,
    equipment: DataTypes.STRING,
    type: DataTypes.STRING,
    idUser: DataTypes.INTEGER,
    value: DataTypes.DECIMAL,
    idFilial: DataTypes.INTEGER,
    idSector: DataTypes.INTEGER,
    idSupplier: DataTypes.INTEGER,
    entryDate: DataTypes.DATE,
    returnDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Equipment',
  });
  return Equipment;
};