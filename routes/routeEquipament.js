const express = require('express')
const routeEquipament = express.Router()
const controllerEquipament = require('../controller/controllerEquipament')

routeEquipament.get('/findAllEquipament', controllerEquipament.findAllEquipament)
routeEquipament.get('/findOneEquipament', controllerEquipament.findOneEquipament)
routeEquipament.post('/addEquipament', controllerEquipament.addEquipament)


module.exports = routeEquipament