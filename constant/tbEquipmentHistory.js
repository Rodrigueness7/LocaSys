const db = require('../database/db')
const {Sequelize} = require('sequelize')
const tbEquipment = require('./tbEquipment')
const tbUser = require('./tbUser')
const tbSector = require('./tbSector')
const tbBranch = require('./tbBranch')

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
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'idUser'
        }
      },
      idSector: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Sectors',
          key: 'idSector'
        }
      },
      idBranch: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Branches',
          key: 'idBranch'
        }
      },
      value: {
        type: Sequelize.DECIMAL(13,2),
        allowNull: false,
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
equipmentHistory.belongsTo(tbUser, {foreignKey: 'idUser'})
equipmentHistory.belongsTo(tbSector, {foreignKey: 'idSector'})
equipmentHistory.belongsTo(tbBranch, {foreignKey: 'idBranch'})



module.exports = equipmentHistory