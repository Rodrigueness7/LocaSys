const db = require('../database/db')
const {Sequelize} = require('sequelize')
const tbuser = require('./tbUser')
const tbFilial = require('./tbFilial')
const tbSector = require('./tbSector')
const tbSupplier = require('./tbSupplier')

const tbEquipment = db.define('Equipments', {
      idEquipment: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codProd: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      equipment: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      type: {
        type: Sequelize.STRING(80),
        allowNull: false
      },
      idUser: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'idUser'
        }
      },
      value: {
        type: Sequelize.DECIMAL(13,2),
        allowNull: false
      },
      idFilial: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Filials',
          key: 'idFilial'
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
      idSupplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Suppliers',
          key: 'idSupplier'
        }
      },
      entryDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletionDate: {
        type: Sequelize.DATE,
        allowNull: true
      }
})

tbEquipment.belongsTo(tbuser, {foreignKey: 'idUser'})
tbEquipment.belongsTo(tbFilial, {foreignKey: 'idFilial'})
tbEquipment.belongsTo(tbSector, {foreignKey: 'idSector'})
tbEquipment.belongsTo(tbSupplier, {foreignKey: 'idSupplier'})

module.exports = tbEquipment;