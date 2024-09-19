const express = require('express')
const routeEquipament = express.Router()
const controllerEquipament = require('../controller/controllerEquipament')

routeEquipament.post('/addEquipament', controllerEquipament.addEquipament)


module.exports = routeEquipament