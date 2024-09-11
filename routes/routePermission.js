const express = require('express')
const routePermission = express.Router()
const controllerPermission = require('../controller/controllerPermission')


routePermission.get('/findAllPermission', controllerPermission.findAllPermission)
routePermission.get('/findPermission/:id', controllerPermission.findPermission)
routePermission.post('/addPermission', controllerPermission.addPermission)
routePermission.put('/updatePermission/:id', controllerPermission.updatePermission)
routePermission.delete('/deletePermission/:id', controllerPermission.deletePermission)

module.exports = routePermission