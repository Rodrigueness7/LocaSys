const express = require('express')
const routeProfile = express.Router()
const controllerProfile = require('../controller/controllerProfile')

routeProfile.post('/addProfile', controllerProfile.addProfile)


module.exports = routeProfile