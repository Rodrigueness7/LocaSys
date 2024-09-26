const express = require('express')
const routeLog = express.Router()
const controllerLog = require('../controller/controllerLog')

routeLog.get('/findAllLog', controllerLog.findAllLog)
routeLog.get('/findLog', controllerLog.findLog)
routeLog.post('/registerLog', controllerLog.addLog)

module.exports = routeLog