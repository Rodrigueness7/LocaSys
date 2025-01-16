const express = require('express')
const routeFilial = express.Router()
const controller = require('../controller/controllerFilial')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeFilial.get('/findAllFilial', auth.verifyToken, checkAcess, controller.findAllFilial)
routeFilial.get('/findFilial/:id', auth.verifyToken, checkAcess, controller.findFilial)
routeFilial.post('/addFilial', checkAcess, controller.addFilial)
routeFilial.put('/updateFilial/:id', auth.verifyToken, checkAcess, controller.updateFilial)
routeFilial.put('/inactivateFilial/:idFilial', auth.verifyToken, checkAcess, controller.inactivateFilial)


module.exports = routeFilial;