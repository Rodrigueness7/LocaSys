const express = require('express')
const routeEquipment = express.Router()
const controller = require('../controller/controllerEquipment')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeEquipment.get('/findAllEquipment', verifyToken, checkAcess, controller.findAll)
routeEquipment.get('/findEquipment', verifyToken, checkAcess, controller.find)
routeEquipment.get('/findEquipmentId/:idEquipment', verifyToken, checkAcess, controller.findId)
routeEquipment.post('/addEquipment', verifyToken, checkAcess, controller.add)
routeEquipment.post('/exportFileXlsx', verifyToken ,controller.exportXlsx)
routeEquipment.post('/exportFilePdf', verifyToken ,controller.exportPdf)
routeEquipment.put('/updateEquipment/:idEquipment', verifyToken, checkAcess, controller.update)
routeEquipment.put('/returnEquipment/:idEquipment', verifyToken, checkAcess, controller.returned)


module.exports = routeEquipment