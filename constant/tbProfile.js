const db = require('../database/db')
const {Sequelize} = require('sequelize')

const tbProfile = db.define('Profiles', {
    idProfile: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      profile: {
        type: Sequelize.STRING(45),
        allowNull: false
      }
})

module.exports = tbProfile;