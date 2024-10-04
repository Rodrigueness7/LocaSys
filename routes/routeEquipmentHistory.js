const express = require('express')
const routeEquipmentHistory = express.Router()
const controllerEquipmentHistory = require('../controller/controllerEquipmentHistory')


routeEquipmentHistory.get('/findAllEquipmentHistory', controllerEquipmentHistory.findAllEquipmentHistory)
routeEquipmentHistory.get('/findEquipmentHistory', controllerEquipmentHistory.findEquipmentHistory)
routeEquipmentHistory.post('/addEquipmentHistory', controllerEquipmentHistory.addEquipmentHistory)
routeEquipmentHistory.put('/updateEquipmentHistory/:idEquipmentHistory', controllerEquipmentHistory.updateEquipmentHistory)



module.exports = routeEquipmentHistory