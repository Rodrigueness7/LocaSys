const express = require('express')
const routeFilial = express.Router()
const controller = require('../controller/controllerFilial')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeFilial.get('/findAllFilial', verifyToken, checkAcess('filial'), controller.findAll)
routeFilial.get('/findFilial/:id', verifyToken, checkAcess('filial'), controller.findId)
routeFilial.post('/addFilial', checkAcess('filial'), controller.add)
routeFilial.put('/updateFilial/:id', verifyToken, checkAcess('filial'), controller.update)
routeFilial.put('/inactivateFilial/:idFilial', verifyToken, checkAcess('filial'), controller.inactivate)


module.exports = routeFilial;