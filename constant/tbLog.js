const db = require('../database/db')
const { Sequelize } = require('sequelize')
const tbUser = require('./tbUser')

const tbLog = db.define('Logs', {
  idLog: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  action: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  actionDate: {
    type: Sequelize.DATE,
    allowNull: false
  },
  idUser: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'idUser'
    }
  }
})

tbLog.belongsTo(tbUser, { foreignKey: 'idUser' })

module.exports = tbLog