const express = require('express')
const routeReadFile = express.Router()
const controllerReadFile = require('../controller/controllerReadFile')

routeReadFile.get('/readFile', controllerReadFile.readFile)


module.exports = routeReadFile