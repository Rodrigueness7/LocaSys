const express = require('express')
const routeProfile_permission = express.Router()
const controller = require('../controller/controllerProfile_permission')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeProfile_permission.get('/findAllProfile_permission', verifyToken, checkAcess('profile_permission'), controller.findAll)
routeProfile_permission.get('/findIdProfile_permission/:id', verifyToken, checkAcess('profile_permission'), controller.findId)
routeProfile_permission.get('/findPermissionIdProfile_permission/:id', verifyToken, checkAcess('profile_permission'), controller.findSectionIdProfile)
routeProfile_permission.post('/addProfile_permission', verifyToken, checkAcess('profile_permission'), controller.add)
routeProfile_permission.put('/updateProfile_permission/:id', verifyToken, checkAcess('profile_permission'), controller.update)
routeProfile_permission.delete('/deleteProfile_permission/:id', verifyToken, checkAcess('profile_permission'), controller.remover)

module.exports = routeProfile_permission