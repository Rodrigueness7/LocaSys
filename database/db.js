require('dotenv').config({path:'./.env'})
const {Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.db_name, process.env.db_username, process.env.db_password, {
    host: process.env.db_host,
    dialect: process.env.db_dialect
})

module.exports = sequelize