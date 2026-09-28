const tbBranch = require('../constant/tbBranch')
const tbSector = require('../constant/tbSector')
const tbProfile = require('../constant/tbProfile')
const tbPermission = require('../constant/tbPermission')
const tbProfile_permission = require('../constant/tbProfile_permission')
const tbUser = require('../constant/tbUser')
const tbSituation = require('../constant/tbSituation')
const branch = require('../config/branch.json')
const sector = require('../config/sector.json')
const profile = require('../config/profile.json')
const permission = require('../config/permission.json')
const user = require('../config/user.json')
const situation = require('../config/situation.json')
const { profile_permission } = require('../config/profile_permission')
const sequelize = require('../database/db')
const { dbMigrate } = require('../config/dbMigrate')
const { cryptPassword } = require('../constant/crypt')


async function sendConfiguration() {
  try {
    const tables =
      (await sequelize.getQueryInterface().showAllTables()).length === 0

    if (tables) {
      await dbMigrate()
    }

    setTimeout(async () => {

      if ((await tbBranch.count()) === 0) {
        await tbBranch.create(branch)
      }

      if ((await tbSector.count()) === 0) {
        await tbSector.create(sector)
      }

      
      await tbProfile.bulkCreate(profile, {
        ignoreDuplicates: true
      })

      
      await tbPermission.bulkCreate(permission, {
        ignoreDuplicates: true
      })

      
      await tbProfile_permission.bulkCreate(profile_permission(), {
        ignoreDuplicates: true
      })

      if ((await tbUser.count()) === 0) {
        user.password = await cryptPassword(user.password)
        await tbUser.create(user)
      }

      if ((await tbSituation.count()) === 0) {
        await tbSituation.bulkCreate(situation, {
          ignoreDuplicates: true
        })
      }

    }, 5000)

  } catch (error) {
    console.log(error.message)
  }
}


module.exports = { sendConfiguration }