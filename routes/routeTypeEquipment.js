const express = require('express')
const routeTypeEquipment = express.Router()
const controller = require('../controller/controllerTypeEquipment')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeTypeEquipment.get('/findAllTypeEquipment', verifyToken, checkAcess('typeEquipment'), controller.findAll)
routeTypeEquipment.get('/findTypeEquipment/:idTypeEquipment', verifyToken, checkAcess('typeEquipment'), controller.findId)
routeTypeEquipment.post('/addTypeEquipment', verifyToken, checkAcess('typeEquipment'), controller.add)
routeTypeEquipment.put('/updateTypeEquipment/:idTypeEquipment', verifyToken, checkAcess('typeEquipment'), controller.update)
routeTypeEquipment.delete('/deleteTypeEquipment/:idTypeEquipment', verifyToken, checkAcess('typeEquipment'), controller.remover)

module.exports = routeTypeEquipment