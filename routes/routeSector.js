const express = require('express')
const routeSector = express.Router()
const controllerSector = require('../controller/controllerSector')
const auth = require('../controller/auth')

routeSector.get('/findAllSector', auth.verifyToken, controllerSector.findAllSector)
routeSector.get('/findSector/:id', auth.verifyToken, controllerSector.findSectorById)
routeSector.post('/addSector', auth.verifyToken, controllerSector.addSector)
routeSector.put('/updateSector/:id', auth.verifyToken, controllerSector.updateSector)
routeSector.delete('/deleteSector/:id', auth.verifyToken, controllerSector.removerSector)

module.exports = routeSector