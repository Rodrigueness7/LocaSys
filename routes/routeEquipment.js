const express = require('express')
const routeEquipment = express.Router()
const controllerEquipment = require('../controller/controllerEquipment')

routeEquipment.get('/findAllEquipment', controllerEquipment.findAllEquipment)
routeEquipment.get('/findEquipment', controllerEquipment.findEquipment)
routeEquipment.post('/addEquipment', controllerEquipment.addEquipment)
routeEquipment.put('/updateEquipment/:idEquipment', controllerEquipment.updateEquipment)


module.exports = routeEquipment