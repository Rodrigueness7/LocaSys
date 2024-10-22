const express = require('express')
const routeEquipment = express.Router()
const controllerEquipment = require('../controller/controllerEquipment')
const auth = require('../controller/auth')

routeEquipment.get('/findAllEquipment', auth.verifyToken, controllerEquipment.findAllEquipment)
routeEquipment.get('/findEquipment', auth.verifyToken, controllerEquipment.findEquipment)
routeEquipment.post('/addEquipment', auth.verifyToken, controllerEquipment.addEquipment)
routeEquipment.post('/exportFileXlsx', controllerEquipment.exportFileXlsx)
routeEquipment.put('/updateEquipment/:idEquipment', auth.verifyToken, controllerEquipment.updateEquipment)


module.exports = routeEquipment