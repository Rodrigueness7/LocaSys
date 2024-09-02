const express = require('express')
const routeSector = express.Router()
const controllerSector = require('../controller/controllerSector')

routeSector.get('/findAllSector', controllerSector.findAllSector)
routeSector.post('/addSector', controllerSector.addSector)


module.exports = routeSector