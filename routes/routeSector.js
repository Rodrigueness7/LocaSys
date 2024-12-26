const express = require('express')
const routeSector = express.Router()
const controllerSector = require('../controller/controllerSector')
const auth = require('../controller/auth')

routeSector.get('/findAllSector', auth.verifyToken, controllerSector.findAllSector)
routeSector.get('/findSector/:id', auth.verifyToken, controllerSector.findSectorById)
routeSector.post('/addSector', controllerSector.addSector)
routeSector.put('/updateSector/:id', auth.verifyToken, controllerSector.updateSector)
routeSector.put('/inactivateSector/:id', auth.verifyToken, controllerSector.inactivateSector)

module.exports = routeSector