const express = require('express')
const routeLog = express.Router()
const controllerLog = require('../controller/controllerLog')
const auth = require('../controller/auth')

routeLog.get('/findAllLog', auth.verifyToken, controllerLog.findAllLog)
routeLog.get('/findLog', auth.verifyToken, controllerLog.findLog)
routeLog.post('/registerLog', auth.verifyToken, controllerLog.addLog)

module.exports = routeLog