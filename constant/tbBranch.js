const db = require('../database/db')
const {Sequelize} = require('sequelize')

const tbBranch = db.define('Branches', {
  idBranch: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  branch: {
    type: Sequelize.STRING(80),
    allowNull: false
  },
  CNPJ: {
    type: Sequelize.STRING(14),
    allowNull: true
  },
  corporateName: {
    type: Sequelize.STRING(80),
    allowNull: true
  },
  uniqueIdentifier: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  deletionDate: {
    type: Sequelize.DATE,
    allowNull: true
  }
})

module.exports = tbBranch;