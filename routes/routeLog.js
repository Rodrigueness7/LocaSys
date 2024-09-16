const express = require('express')
const routeLog = express.Router()
const controllerLog = require('../controller/controllerLog')

routeLog.get('/findAllLog', controllerLog.findAllLog)
routeLog.get('/findLogDate', controllerLog.findLogDate)
routeLog.get('/findLogAction', controllerLog.findLogAction)
routeLog.post('/registerLog', controllerLog.addLog)

module.exports = routeLog