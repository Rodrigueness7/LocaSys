const express = require('express')
const routeEquipment = express.Router()
const controllerEquipment = require('../controller/controllerEquipment')
const auth = require('../controller/auth')

routeEquipment.get('/findAllEquipment', auth.verifyToken, controllerEquipment.findAllEquipment)
routeEquipment.get('/findEquipment', auth.verifyToken, controllerEquipment.findEquipment)
routeEquipment.get('/findEquipmentId/:idEquipment', auth.verifyToken, controllerEquipment.findEquipmentId)
routeEquipment.post('/addEquipment', auth.verifyToken, controllerEquipment.addEquipment)
routeEquipment.post('/exportFileXlsx', auth.verifyToken ,controllerEquipment.exportFileXlsx)
routeEquipment.post('/exportFilePdf', auth.verifyToken ,controllerEquipment.exportFilePdf)
routeEquipment.put('/updateEquipment/:idEquipment', auth.verifyToken, controllerEquipment.updateEquipment)
routeEquipment.put('/inactivateEquipment/:idEquipment', auth.verifyToken, controllerEquipment.inactivateEquipment)


module.exports = routeEquipment