const express = require('express')
const routeProfile = express.Router()
const controllerProfile = require('../controller/controllerProfile')


routeProfile.get('/findAllProfile', controllerProfile.findAllProfile)
routeProfile.get('/findProfile/:id', controllerProfile.findProfile)
routeProfile.post('/addProfile', controllerProfile.addProfile)
routeProfile.put('/updateProfile/:id', controllerProfile.updateProfile)
routeProfile.delete('/deleteProfile/:id', controllerProfile.deleteProfile)

module.exports = routeProfile