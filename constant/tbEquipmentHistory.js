const db = require('../database/db')
const {Sequelize} = require('sequelize')
const tbEquipment = require('./tbEquipment')

const equipmentHistory = db.define('equipmentHistorys', {
    idEquipmentHistory: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEquipment: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Equipments',
          key: 'idEquipment'
        }
      },
      reason: {
        type: Sequelize.STRING,
        allowNull: true
      },
      entryDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      returnDate: {
        type: Sequelize.DATE,
        allowNull: true
      }
})

equipmentHistory.belongsTo(tbEquipment, {foreignKey: 'idEquipment'})

module.exports = equipmentHistory