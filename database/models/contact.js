'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Contact.init({
    idContact: DataTypes.INTEGER,
    supplier: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    cellPhone: DataTypes.STRING,
    address: DataTypes.STRING,
    number: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    state: DataTypes.STRING,
    county: DataTypes.STRING,
    district: DataTypes.STRING,
    idSupplier: DataTypes.INTEGER,
    deletionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};