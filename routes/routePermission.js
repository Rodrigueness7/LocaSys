const express = require('express')
const routePermission = express.Router()
const controllerPermission = require('../controller/controllerPermission')
const auth = require('../controller/auth')

routePermission.get('/findAllPermission', auth.verifyToken, controllerPermission.findAllPermission)
routePermission.get('/findPermission/:id', auth.verifyToken, controllerPermission.findPermission)
routePermission.post('/addPermission', auth.verifyToken, controllerPermission.addPermission)
routePermission.put('/updatePermission/:id', auth.verifyToken, controllerPermission.updatePermission)
routePermission.delete('/deletePermission/:id', auth.verifyToken, controllerPermission.deletePermission)

module.exports = routePermission