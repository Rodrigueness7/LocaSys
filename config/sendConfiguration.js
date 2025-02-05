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



async function sendConfiguration() {
  try {
    if((await tbFilial.findAll()).map(values => values.dataValues)) {
        throw new Error('There is already data in the Filial table')
    }

    if((await tbSector.findAll()).map(values => values.dataValues)) {
        throw new Error('already There is already data in the Sector table ')
    }

    if((await tbProfile.findAll()).map(values => values.dataValues)) {
        throw new Error('There is already data in the Profile table')
    }

    if((await tbPermission.findAll()).map(values => values.dataValues)) {
        throw new Error('There is already data in the Permission table')
    }

    if((await tbProfile_permission.findAll()).map(values => values.dataValues)) {
        throw new Error('There is already data in the Profile_permission table')
    }

     tbFilial.create(filial)
     tbSector.create(sector)
     profile.map(value => tbProfile.create(value))
     permission.map(value => tbPermission.create(value))
     profile_permission().map(value => tbProfile_permission.create(value))
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {sendConfiguration}