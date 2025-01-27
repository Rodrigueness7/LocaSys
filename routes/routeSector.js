const express = require('express')
const routeSector = express.Router()
const controller = require('../controller/controllerSector')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeSector.get('/findAllSector', verifyToken, checkAcess('sector'), controller.findAll)
routeSector.get('/findSector/:id', verifyToken, checkAcess('sector'), controller.findId)
routeSector.post('/addSector', checkAcess('sector'), controller.add)
routeSector.put('/updateSector/:id', verifyToken, checkAcess('sector'), controller.update)
routeSector.put('/inactivateSector/:idSector', verifyToken, checkAcess('sector'), controller.inactivate)

module.exports = routeSector