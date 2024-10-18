const express = require('express')
const routeEquipmentHistory = express.Router()
const controllerEquipmentHistory = require('../controller/controllerEquipmentHistory')
const auth = require('../controller/auth')

routeEquipmentHistory.get('/findAllEquipmentHistory', auth.verifyToken, controllerEquipmentHistory.findAllEquipmentHistory)
routeEquipmentHistory.get('/findEquipmentHistory', auth.verifyToken, controllerEquipmentHistory.findEquipmentHistory)
routeEquipmentHistory.post('/addEquipmentHistory', auth.verifyToken, controllerEquipmentHistory.addEquipmentHistory)
routeEquipmentHistory.put('/updateEquipmentHistory/:idEquipmentHistory', auth.verifyToken, controllerEquipmentHistory.updateEquipmentHistory)



module.exports = routeEquipmentHistory