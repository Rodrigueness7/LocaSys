const express = require('express')
const routeSector = express.Router()
const controllerSector = require('../controller/controllerSector')

routeSector.get('/findAllSector', controllerSector.findAllSector)
routeSector.get('/findSector/:id', controllerSector.findSectorById)
routeSector.post('/addSector', controllerSector.addSector)
routeSector.put('/updateSector/:id', controllerSector.updateSector)
routeSector.delete('/deleteSector/:id', controllerSector.removerSector)

module.exports = routeSector