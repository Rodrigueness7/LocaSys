const db = require('../database/db')
const {Sequelize} = require('sequelize')

const tbPermission = db.define('Permissions', {
    idPermission: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      permission: {
        type: Sequelize.STRING(45),
        allowNull: false
      }
})

module.exports = tbPermission