'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile_permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profile_permission.init({
    idProfile_permission: DataTypes.INTEGER,
    idProfile: DataTypes.INTEGER,
    idPermission: DataTypes.INTEGER,
    allow: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Profile_permission',
  });
  return Profile_permission;
};