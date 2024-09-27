const db = require('../database/db')
const {Sequelize} = require('sequelize')
const tbEquipament = require('./tbEquipament')

const historyEquipament = db.define('historyEquipaments', {
    idHistory: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codProd: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Equipaments',
          key: 'codProd'
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

historyEquipament.belongsTo(tbEquipament, {foreignKey: 'codProd'})

module.exports = historyEquipament