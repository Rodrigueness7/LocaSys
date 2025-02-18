const tbBranch = require('../constant/tbBranch')
const tbSector = require('../constant/tbSector')
const tbProfile = require('../constant/tbProfile')
const tbPermission = require('../constant/tbPermission')
const tbProfile_permission = require('../constant/tbProfile_permission')
const tbUser = require('../constant/tbUser')
const branch = require('../config/branch.json')
const sector = require('../config/sector.json')
const profile = require('../config/profile.json')
const permission = require('../config/permission.json')
const user = require('../config/user.json')
const { profile_permission } = require('../config/profile_permission')
const sequelize = require('../database/db')
const { dbMigrate } = require('../config/dbMigrate')


async function sendConfiguration() {
  try {
    const tables = (await sequelize.getQueryInterface().showAllTables()).length === 0
    if (tables) {
      dbMigrate() 
    }

    setTimeout(async() => {
      if ((await tbBranch.findAll()).map(values => values.dataValues).length <= 0) {
      await tbBranch.create(branch)
    }

    if ((await tbSector.findAll()).map(values => values.dataValues).length <= 0) {
      await tbSector.create(sector)
    }

    if ((await tbProfile.findAll()).map(values => values.dataValues).length <= 0) {
      profile.map(values => tbProfile.create(values))
    }

    if ((await tbPermission.findAll()).map(values => values.dataValues).length <= 0) {
      permission.map(values => tbPermission.create(values))
    }

    if ((await tbProfile_permission.findAll()).map(values => values.dataValues).length <= 0) {
      profile_permission().map(values => tbProfile_permission.create(values))
    }

    if ((await tbUser.findAll()).map(values => values.dataValues).length <= 0) {
      await tbUser.create(user)
    }

    }, 5000)
    
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = { sendConfiguration }