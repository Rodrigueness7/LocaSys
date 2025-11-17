const db = require('../database/db')
const {Sequelize} = require('sequelize')
const tbBranch = require('./tbBranch')

const tbEquipmentRental = db.define('EquipmentRentals', {
  idEquipmentRental: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idBranch: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
        model: 'Branches',
        key: 'idBranch'
    }
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
      },
      releaseDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      initPeriod: {
        type: Sequelize.DATE,
        allowNull: false
      },
      finishPeriod: {
        type: Sequelize.DATE,
        allowNull: false
      }
})

tbEquipmentRental.belongsTo(tbBranch, {foreignKey: 'idBranch'})
module.exports = tbEquipmentRental