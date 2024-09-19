'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Equipament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Equipament.init({
    codProd: DataTypes.INTEGER,
    equipament: DataTypes.STRING,
    type: DataTypes.STRING,
    idUser: DataTypes.INTEGER,
    value: DataTypes.DECIMAL,
    idFilial: DataTypes.INTEGER,
    idSector: DataTypes.INTEGER,
    idSupplier: DataTypes.INTEGER,
    entryDate: DataTypes.DATE,
    deletionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Equipament',
  });
  return Equipament;
};