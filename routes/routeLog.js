const express = require('express')
const routeLog = express.Router()
const controllerLog = require('../controller/controllerLog')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeLog.get('/findAllLog', auth.verifyToken, checkAcess('log'), controllerLog.findAllLog)
routeLog.get('/findLog', auth.verifyToken, checkAcess('log'), controllerLog.findLog)

module.exports = routeLog