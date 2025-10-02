const db = require('../database/db')
const { Sequelize } = require('sequelize')
const tbuser = require('./tbUser')
const tbBranch = require('./tbBranch')
const tbSector = require('./tbSector')
const tbSupplier = require('./tbSupplier')
const tbTypeEquipment = require('./tbTypeEquipment')

const tbEquipment = db.define('Equipments', {
  idEquipment: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  codProd: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  equipment: {
    type: Sequelize.STRING(80),
    allowNull: false
  },
  idTypeEquipment: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'TypeEquipments',
      key: 'idTypeEquipment'
    }
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
    type: Sequelize.DECIMAL(13, 2),
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
  returnDate: {
    type: Sequelize.DATE,
    allowNull: true
  },

})

tbEquipment.belongsTo(tbuser, { foreignKey: 'idUser' })
tbEquipment.belongsTo(tbBranch, { foreignKey: 'idBranch' })
tbEquipment.belongsTo(tbSector, { foreignKey: 'idSector' })
tbEquipment.belongsTo(tbSupplier, { foreignKey: 'idSupplier' })
tbEquipment.belongsTo(tbTypeEquipment, { foreignKey: 'idTypeEquipment' })

module.exports = tbEquipment;