const express = require('express')
const routeEquipmentHistory = express.Router()
const controllerEquipmentHistory = require('../controller/controllerEquipmentHistory')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeEquipmentHistory.get('/findAllEquipmentHistory', auth.verifyToken, checkAcess, controllerEquipmentHistory.findAllEquipmentHistory)
routeEquipmentHistory.get('/findEquipmentHistory', auth.verifyToken, checkAcess, controllerEquipmentHistory.findEquipmentHistory)
routeEquipmentHistory.get('/findEquipmentHistoryId/:idEquipmentHistory', auth.verifyToken, checkAcess, controllerEquipmentHistory.findEquipmentHistoryId)
routeEquipmentHistory.post('/addEquipmentHistory', auth.verifyToken, checkAcess, controllerEquipmentHistory.addEquipmentHistory)
routeEquipmentHistory.put('/updateEquipmentHistory/:idEquipmentHistory', auth.verifyToken, checkAcess, controllerEquipmentHistory.updateEquipmentHistory)



module.exports = routeEquipmentHistory