const express = require('express')
const routeFilial = express.Router()
const controller = require('../controller/controllerFilial')
const auth = require('../controller/auth')

routeFilial.get('/findAllFilial', auth.verifyToken, controller.findAllFilial)
routeFilial.get('/findFilial/:id', auth.verifyToken, controller.findFilial)
routeFilial.post('/addFilial', controller.addFilial)
routeFilial.put('/updateFilial/:id', auth.verifyToken, controller.updateFilial)
routeFilial.put('/inactivateFilial/:idFilial', auth.verifyToken, controller.inactivateFilial)


module.exports = routeFilial;