const db = require('../database/db')
const {Sequelize} = require('sequelize')
const tbSupplier = require('./tbSupplier')

const tbContact = db.define('Contacts', {
  idContact: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  contact: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  telephone: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  cellPhone: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  address: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  number: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  zipCode: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  state: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  county: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  district: {
    type: Sequelize.STRING(45),
    allowNull: true
  },
  idSupplier: {
    type: Sequelize.INTEGER,
    allowNull:false,
    references: {
      model: 'Suppliers',
      key: 'idSupplier'
    }
  }
})

tbContact.belongsTo(tbSupplier, {foreignKey: 'idSupplier'})

module.exports = tbContact