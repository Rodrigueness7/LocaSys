const express = require('express')
const routeFile = express.Router()
const controllerFile = require('../controller/controllerFile')

routeFile.get('/readFile', controllerFile.readFile)


module.exports = routeFile