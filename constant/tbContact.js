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
        type: Sequelize.STRING(45)
      },
      telephone: {
        type: Sequelize.STRING(45)
      },
      cellPhone: {
        type: Sequelize.STRING(45)
      },
      address: {
        type: Sequelize.STRING(45)
      },
      number: {
        type: Sequelize.STRING(45)
      },
      zipCode: {
        type: Sequelize.STRING(45)
      },
      state: {
        type: Sequelize.STRING(45)
      },
      county: {
        type: Sequelize.STRING(45)
      },
      district: {
        type: Sequelize.STRING(45)
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