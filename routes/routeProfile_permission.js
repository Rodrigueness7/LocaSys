const express = require('express')
const routeProfile_permission = express.Router()
const controller = require('../controller/controllerProfile_permission')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeProfile_permission.get('/findAllProfile_permission', verifyToken, checkAcess, controller.findAll)
routeProfile_permission.get('/findIdProfile_permission/:id', verifyToken, checkAcess, controller.findId)
routeProfile_permission.post('/addProfile_permission', verifyToken, checkAcess, controller.add)
routeProfile_permission.put('/updateProfile_permission/:id', verifyToken, checkAcess, controller.update)
routeProfile_permission.delete('/deleteProfile_permission/:id', verifyToken, checkAcess, controller.remover)

module.exports = routeProfile_permission