const express = require('express')
const routeFilial = express.Router()
const controller = require('../controller/controllerFilial')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeFilial.get('/findAllFilial', verifyToken, checkAcess, controller.findAll)
routeFilial.get('/findFilial/:id', verifyToken, checkAcess, controller.findId)
routeFilial.post('/addFilial', checkAcess, controller.add)
routeFilial.put('/updateFilial/:id', verifyToken, checkAcess, controller.update)
routeFilial.put('/inactivateFilial/:idFilial', verifyToken, checkAcess, controller.inactivate)


module.exports = routeFilial;