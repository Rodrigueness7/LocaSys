const express = require('express')
const routeEquipmentRental = express.Router()
const controllerEquipmentRental = require('../controller/controllerEquipmentRental')

routeEquipmentRental.get('/findEquipmentRental', controllerEquipmentRental.findEquipmentRental)
routeEquipmentRental.post('/addEquipmentRental', controllerEquipmentRental.addFile)
routeEquipmentRental.delete('/deleteAllEquipmentRental', controllerEquipmentRental.removerAllEquipmentRental)

module.exports = routeEquipmentRental