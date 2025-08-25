const db = require('../database/db')
const { Sequelize } = require('sequelize')

const tbTypeEquipment = db.define('TypeEquipments', {
  idTypeEquipment: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  typeEquipment: {
    type: Sequelize.STRING(80),
    allowNull: false
  }
})


module.exports = tbTypeEquipment