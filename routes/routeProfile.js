const express = require('express')
const routeProfile = express.Router()
const controller = require('../controller/controllerProfile')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeProfile.get('/findAllProfile', verifyToken, checkAcess('profile'), controller.findAll)
routeProfile.get('/findProfile/:id', verifyToken, checkAcess('profile'), controller.find)
routeProfile.post('/addProfile', checkAcess('profile'), controller.add)
routeProfile.put('/updateProfile/:id', verifyToken, checkAcess('profile'), controller.update)
routeProfile.delete('/deleteProfile/:id', verifyToken, checkAcess('profile'), controller.remover)

module.exports = routeProfile