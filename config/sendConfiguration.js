const tbFilial = require('../constant/tbFilial')
const tbSector = require('../constant/tbSector')
const tbProfile = require('../constant/tbProfile')
const tbPermission = require('../constant/tbPermission')
const tbProfile_permission = require('../constant/tbProfile_permission')
const filial = require('../config/filial.json')
const sector = require('../config/sector.json')
const profile = require('../config/profile.json')
const permission = require('../config/permission.json')
const {profile_permission} = require('../config/profile_permission')
const sequelize = require('../database/db')
const {dbMigrate} = require('../config/dbMigrate')


async function sendConfiguration() {
  try {
      const tables = await sequelize.getQueryInterface().tableExists('filials')
     
      if(!tables) {
        dbMigrate()
      }

  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {sendConfiguration}