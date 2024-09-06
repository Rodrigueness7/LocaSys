const db = require('../database/db')
const {Sequelize} = require('sequelize')
const tbFilial = require('./tbFilial')

const tbSector = db.define('Sectors', {
    idSector: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sector: {
        type: Sequelize.STRING(80),
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
})

tbSector.belongsTo(tbFilial, {foreignKey: 'idFilial'})

module.exports = tbSector;