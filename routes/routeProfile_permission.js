const express = require('express')
const routeProfile_permission = express.Router()
const controllerProfile_permission = require('../controller/controllerProfile_permission')

routeProfile_permission.get('/findAllProfile_permission', controllerProfile_permission.findAllProfile_permission)
routeProfile_permission.post('/addProfile_permission', controllerProfile_permission.addProfile_permission)
routeProfile_permission.put('/updateProfile_permission/:id', controllerProfile_permission.updateProfile_permission)
routeProfile_permission.delete('/deleteProfile_permission/:id', controllerProfile_permission.removerProfile_permission)

module.exports = routeProfile_permission