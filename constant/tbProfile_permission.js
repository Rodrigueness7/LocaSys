const db = require('../database/db')
const { Sequelize } = require('sequelize')
const tbPermission = require('./tbPermission')
const tbProfile = require('./tbProfile')

const tbProfile_permission = db.define('Profile_permissions', {
  idProfile_permission: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  idProfile: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Profiles',
      key: 'idProfile'
    }
  },
  idPermission: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Permissions',
      key: 'idPermission'
    }
  },
  allow: {
    allowNull: false,
    type: Sequelize.STRING
  },
})

tbProfile_permission.belongsTo(tbProfile, { foreignKey: 'idProfile' })
tbProfile_permission.belongsTo(tbPermission, { foreignKey: 'idPermission' })

module.exports = tbProfile_permission;