const express = require('express')
const routeEquipament = express.Router()
const controllerEquipament = require('../controller/controllerEquipament')

routeEquipament.get('/findAllEquipament', controllerEquipament.findAllEquipament)
routeEquipament.get('/findEquipament', controllerEquipament.findEquipament)
routeEquipament.post('/addEquipament', controllerEquipament.addEquipament)


module.exports = routeEquipament