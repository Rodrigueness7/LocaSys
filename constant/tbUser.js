const db = require('../database/db')
const {Sequelize} = require('sequelize')
const tbSector = require('./tbSector')
const tbProfile = require('./tbProfile')

const tbUser = db.define('Users', {
  idUser: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  firstName: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  cpf: {
    type:Sequelize.STRING(11),
    allowNull:true
  },
  username: {
    type: Sequelize.STRING(80),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(22)
  },
  email: {
    type: Sequelize.STRING(50)
  },
  idSector: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Sectors',
      key: 'idSector'
    }
  },
  idProfile: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Profiles',
      key: 'idProfile'
    }
  }
})

tbUser.belongsTo(tbSector, {foreignKey: 'idSector'})
tbUser.belongsTo(tbProfile, {foreignKey: 'idProfile'})

module.exports = tbUser;