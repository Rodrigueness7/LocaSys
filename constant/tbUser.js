const db = require('../database/db')
const {Sequelize} = require('sequelize')

const tbUser = db.define('Users', {
    idUser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
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

module.exports = tbUser;