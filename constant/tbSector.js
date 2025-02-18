const db = require('../database/db')
const {Sequelize} = require('sequelize')
const tbBranch = require('./tbBranch')

const tbSector = db.define('Sectors', {
  idSector: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  sector: {
    type: Sequelize.STRING(80),
    allowNull: false
  },
  idBranch: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Branches',
      key: 'idBranch'
    }
  },
  deletionDate: {
    type: Sequelize.DATE,
    allowNull: true
  }
})

tbSector.belongsTo(tbBranch, {foreignKey: 'idBranch'})

module.exports = tbSector;