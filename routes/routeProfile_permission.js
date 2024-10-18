const express = require('express')
const routeProfile_permission = express.Router()
const controllerProfile_permission = require('../controller/controllerProfile_permission')
const auth = require('../controller/auth')

routeProfile_permission.get('/findAllProfile_permission', auth.verifyToken, controllerProfile_permission.findAllProfile_permission)
routeProfile_permission.post('/addProfile_permission', auth.verifyToken, controllerProfile_permission.addProfile_permission)
routeProfile_permission.put('/updateProfile_permission/:id', auth.verifyToken, controllerProfile_permission.updateProfile_permission)
routeProfile_permission.delete('/deleteProfile_permission/:id', auth.verifyToken, controllerProfile_permission.removerProfile_permission)

module.exports = routeProfile_permission