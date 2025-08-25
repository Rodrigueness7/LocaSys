const express = require('express')
const routeType = express.Router()
const controller = require('../controller/controllerType')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeType.get('/findAllType', verifyToken, checkAcess('type'), controller.findAll)
routeType.get('/findType/:idType', verifyToken, checkAcess('type'), controller.findId)
routeType.post('/addType', verifyToken, checkAcess('type'), controller.add)
routeType.put('/updateType/:idType', verifyToken, checkAcess('type'), controller.update)
routeType.delete('/deleteType/:idType', verifyToken, checkAcess('type'), controller.remover)

module.exports = routeType