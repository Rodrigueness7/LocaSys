'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Branch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Branch.init({
    idBranch: DataTypes.INTEGER,
    branch: DataTypes.STRING,
    CNPJ: DataTypes.STRING,
    corporateName: DataTypes.STRING, 
    uniqueIdentifier: DataTypes.INTEGER,
    deletionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Branch',
  });
  return Branch;
};