const express = require('express')
const routeProfile = express.Router()
const controller = require('../controller/controllerProfile')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeProfile.get('/findAllProfile', verifyToken, checkAcess, controller.findAll)
routeProfile.get('/findProfile/:id', verifyToken, checkAcess, controller.find)
routeProfile.post('/addProfile', checkAcess, controller.add)
routeProfile.put('/updateProfile/:id', verifyToken, checkAcess, controller.update)
routeProfile.delete('/deleteProfile/:id', verifyToken, checkAcess, controller.remover)

module.exports = routeProfile