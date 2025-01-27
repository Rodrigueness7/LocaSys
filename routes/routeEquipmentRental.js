const express = require('express')
const routeEquipmentRental = express.Router()
const controller = require('../controller/controllerEquipmentRental')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeEquipmentRental.get('/findEquipmentRental', verifyToken, checkAcess('equipmentRental'), controller.find)
routeEquipmentRental.get('/findAllEquipmentRental', verifyToken, checkAcess('equipmentRental'), controller.findAll)
routeEquipmentRental.get('/findEquipmentRentalId/:idEquipmentRental', verifyToken, checkAcess('equipmentRental'), controller.findId)
routeEquipmentRental.post('/addEquipmentRental', verifyToken, checkAcess('equipmentRental'), controller.addFile)
routeEquipmentRental.delete('/deleteAllEquipmentRental', verifyToken, checkAcess('equipmentRental'), controller.removerAll)

module.exports = routeEquipmentRental