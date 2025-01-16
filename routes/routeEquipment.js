const express = require('express')
const routeEquipment = express.Router()
const controllerEquipment = require('../controller/controllerEquipment')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeEquipment.get('/findAllEquipment', auth.verifyToken, checkAcess, controllerEquipment.findAllEquipment)
routeEquipment.get('/findEquipment', auth.verifyToken, checkAcess, controllerEquipment.findEquipment)
routeEquipment.get('/findEquipmentId/:idEquipment', auth.verifyToken, checkAcess, controllerEquipment.findEquipmentId)
routeEquipment.post('/addEquipment', auth.verifyToken, checkAcess, controllerEquipment.addEquipment)
routeEquipment.post('/exportFileXlsx', auth.verifyToken ,controllerEquipment.exportFileXlsx)
routeEquipment.post('/exportFilePdf', auth.verifyToken ,controllerEquipment.exportFilePdf)
routeEquipment.put('/updateEquipment/:idEquipment', auth.verifyToken, checkAcess, controllerEquipment.updateEquipment)
routeEquipment.put('/returnEquipment/:idEquipment', auth.verifyToken, checkAcess, controllerEquipment.returnEquipment)


module.exports = routeEquipment