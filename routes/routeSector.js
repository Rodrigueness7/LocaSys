const express = require('express')
const routeSector = express.Router()
const controller = require('../controller/controllerSector')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeSector.get('/findAllSector', verifyToken, checkAcess, controller.findAll)
routeSector.get('/findSector/:id', verifyToken, checkAcess, controller.findId)
routeSector.post('/addSector', checkAcess, controller.add)
routeSector.put('/updateSector/:id', verifyToken, checkAcess, controller.update)
routeSector.put('/inactivateSector/:idSector', verifyToken, checkAcess, controller.inactivate)

module.exports = routeSector