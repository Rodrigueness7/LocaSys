const db = require('../database/db')
const { Sequelize } = require('sequelize')

const tbSituation = db.define('Situations', {
  idSituation: {
    allowNull: false,   
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
    situation: {
    type: Sequelize.STRING(40),
    allowNull: false
  }
})

module.exports = tbSituation;


    

