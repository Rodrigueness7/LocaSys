const db = require('../database/db')

const tbType = db.define('Types', {
     idType: {
         allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING(80),
        allowNull: false
      }
})


module.exports = tbType