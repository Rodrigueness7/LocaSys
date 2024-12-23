'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Supplier.init({
    idSupplier: DataTypes.INTEGER,
    supplier: DataTypes.STRING,
    email: DataTypes.STRING,
    contact: DataTypes.STRING,
    CNPJ: DataTypes.STRING,
    address: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    state: DataTypes.STRING,
    city: DataTypes.STRING,
    deletionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};