const db = require('../database/db')
const {Sequelize} = require('sequelize')

const tbEquipmentRental = db.define('EquipmentRentals', {
  idEquipmentRental: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  codProd: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  proposal: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  description: {
    type: Sequelize.STRING(80),
    allowNull: false
  },
  init: {
    type: Sequelize.DATE,
    allowNull: true
  },
  finish: {
    type: Sequelize.DATE,
    allowNull: true
  },
  entry: {
    type: Sequelize.DATE,
    allowNull: true
  },
  output: {
    type: Sequelize.DATE,
    allowNull: true
  },
  value: {
    type: Sequelize.DECIMAL(13,2),
    allowNull: false
  }
})

module.exports = tbEquipmentRental