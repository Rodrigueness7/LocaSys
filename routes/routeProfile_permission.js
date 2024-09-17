const express = require('express')
const routeProfile_permission = express.Router()
const controllerProfile_permission = require('../controller/controllerProfile_permission')

routeProfile_permission.get('/findAllProfile_permission', controllerProfile_permission.findAllProfile_permission)
routeProfile_permission.post('/addProfile_permission', controllerProfile_permission.addProfile_permission)

module.exports = routeProfile_permission