const express = require('express')
const routePermission = express.Router()
const controllerPermission = require('../controller/controllerPermission')

routePermission.post('/addPermission', controllerPermission.addPermission)



module.exports = routePermission