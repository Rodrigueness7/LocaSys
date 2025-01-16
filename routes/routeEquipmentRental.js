const express = require('express')
const routeEquipmentRental = express.Router()
const controller = require('../controller/controllerEquipmentRental')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeEquipmentRental.get('/findEquipmentRental', verifyToken, checkAcess, controller.find)
routeEquipmentRental.get('/findAllEquipmentRental', verifyToken, checkAcess, controller.findAll)
routeEquipmentRental.get('/findEquipmentRentalId/:idEquipmentRental', verifyToken, checkAcess, controller.findId)
routeEquipmentRental.post('/addEquipmentRental', verifyToken, checkAcess, controller.addFile)
routeEquipmentRental.delete('/deleteAllEquipmentRental', verifyToken, checkAcess, controller.removerAll)

module.exports = routeEquipmentRental