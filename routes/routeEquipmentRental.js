const express = require('express')
const routeEquipmentRental = express.Router()
const controllerEquipmentRental = require('../controller/controllerEquipmentRental')
const auth = require('../controller/auth')

routeEquipmentRental.get('/findEquipmentRental', auth.verifyToken, controllerEquipmentRental.findEquipmentRental)
routeEquipmentRental.post('/addEquipmentRental', auth.verifyToken, controllerEquipmentRental.addFile)
routeEquipmentRental.delete('/deleteAllEquipmentRental', auth.verifyToken, controllerEquipmentRental.removerAllEquipmentRental)

module.exports = routeEquipmentRental