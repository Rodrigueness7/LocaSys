const express = require('express')
const routeEquipmentHistory = express.Router()
const controller = require('../controller/controllerEquipmentHistory')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeEquipmentHistory.get('/findAllEquipmentHistory', verifyToken, checkAcess('equipmentHistory'), controller.findAll)
routeEquipmentHistory.get('/findEquipmentHistory', verifyToken, checkAcess('equipmentHistory'), controller.find)
routeEquipmentHistory.get('/findEquipmentHistoryId/:idEquipmentHistory', verifyToken, checkAcess('equipmentHistory'), controller.findId)
routeEquipmentHistory.post('/addEquipmentHistory', verifyToken, checkAcess('equipmentHistory'), controller.add)
routeEquipmentHistory.put('/updateEquipmentHistory/:idEquipmentHistory', verifyToken, checkAcess('equipmentHistory'), controller.update)



module.exports = routeEquipmentHistory