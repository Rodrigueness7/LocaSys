const express = require('express')
const routeEquipmentHistory = express.Router()
const controllerEquipmentHistory = require('../controller/controllerEquipmentHistory')


routeEquipmentHistory.get('/findAllEquipmentHistory', controllerEquipmentHistory.findAllEquipmentHistory)
routeEquipmentHistory.post('/addEquipmentHistory', controllerEquipmentHistory.addEquipmentHistory)



module.exports = routeEquipmentHistory