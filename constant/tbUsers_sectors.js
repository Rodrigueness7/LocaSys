const db = require('../database/db')
const {Sequelize} = require('sequelize')
const tbUser = require('./tbUser')
const tbSector = require('./tbSector')

const tbUsers_Sectors = db.define('user_sectors', {
  idUserSector: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  idUser: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  idSector: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
  }
})

tbUsers_Sectors.belongsTo(tbUser, { foreignKey: 'idUser' })
tbUsers_Sectors.belongsTo(tbSector, { foreignKey: 'idSector' })

module.exports = tbUsers_Sectors;