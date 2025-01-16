const express = require('express')
const routeSector = express.Router()
const controllerSector = require('../controller/controllerSector')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeSector.get('/findAllSector', auth.verifyToken, checkAcess, controllerSector.findAllSector)
routeSector.get('/findSector/:id', auth.verifyToken, checkAcess, controllerSector.findSectorById)
routeSector.post('/addSector', checkAcess, controllerSector.addSector)
routeSector.put('/updateSector/:id', auth.verifyToken, checkAcess, controllerSector.updateSector)
routeSector.put('/inactivateSector/:idSector', auth.verifyToken, checkAcess, controllerSector.inactivateSector)

module.exports = routeSector