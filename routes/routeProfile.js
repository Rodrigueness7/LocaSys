const express = require('express')
const routeProfile = express.Router()
const controllerProfile = require('../controller/controllerProfile')
const auth = require('../controller/auth')

routeProfile.get('/findAllProfile', auth.verifyToken, controllerProfile.findAllProfile)
routeProfile.get('/findProfile/:id', auth.verifyToken, controllerProfile.findProfile)
routeProfile.post('/addProfile', auth.verifyToken, controllerProfile.addProfile)
routeProfile.put('/updateProfile/:id', auth.verifyToken, controllerProfile.updateProfile)
routeProfile.delete('/deleteProfile/:id', auth.verifyToken, controllerProfile.deleteProfile)

module.exports = routeProfile