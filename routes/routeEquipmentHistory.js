const express = require('express')
const routeEquipmentHistory = express.Router()
const controller = require('../controller/controllerEquipmentHistory')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeEquipmentHistory.get('/findAllEquipmentHistory', verifyToken, checkAcess, controller.findAll)
routeEquipmentHistory.get('/findEquipmentHistory', verifyToken, checkAcess, controller.find)
routeEquipmentHistory.get('/findEquipmentHistoryId/:idEquipmentHistory', verifyToken, checkAcess, controller.findId)
routeEquipmentHistory.post('/addEquipmentHistory', verifyToken, checkAcess, controller.add)
routeEquipmentHistory.put('/updateEquipmentHistory/:idEquipmentHistory', verifyToken, checkAcess, controller.update)



module.exports = routeEquipmentHistory