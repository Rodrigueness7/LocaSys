const express = require('express')
const routeEquipmentRental = express.Router()
const controllerEquipmentRental = require('../controller/controllerEquipmentRental')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeEquipmentRental.get('/findEquipmentRental', auth.verifyToken, checkAcess, controllerEquipmentRental.findEquipmentRental)
routeEquipmentRental.get('/findAllEquipmentRental', auth.verifyToken, checkAcess, controllerEquipmentRental.findAllEquipmentRental)
routeEquipmentRental.get('/findEquipmentRentalId/:idEquipmentRental', auth.verifyToken, checkAcess, controllerEquipmentRental.findEquipmentRentalId)
routeEquipmentRental.post('/addEquipmentRental', auth.verifyToken, checkAcess, controllerEquipmentRental.addFile)
routeEquipmentRental.delete('/deleteAllEquipmentRental', auth.verifyToken, checkAcess, controllerEquipmentRental.removerAllEquipmentRental)

module.exports = routeEquipmentRental