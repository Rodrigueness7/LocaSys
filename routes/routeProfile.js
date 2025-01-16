const express = require('express')
const routeProfile = express.Router()
const controllerProfile = require('../controller/controllerProfile')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeProfile.get('/findAllProfile', auth.verifyToken, checkAcess, controllerProfile.findAllProfile)
routeProfile.get('/findProfile/:id', auth.verifyToken, checkAcess, controllerProfile.findProfile)
routeProfile.post('/addProfile', checkAcess, controllerProfile.addProfile)
routeProfile.put('/updateProfile/:id', auth.verifyToken, checkAcess, controllerProfile.updateProfile)
routeProfile.delete('/deleteProfile/:id', auth.verifyToken, checkAcess, controllerProfile.deleteProfile)

module.exports = routeProfile