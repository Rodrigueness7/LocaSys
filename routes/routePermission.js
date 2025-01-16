const express = require('express')
const routePermission = express.Router()
const controllerPermission = require('../controller/controllerPermission')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routePermission.get('/findAllPermission', auth.verifyToken, checkAcess, controllerPermission.findAllPermission)
routePermission.get('/findPermission/:id', auth.verifyToken, checkAcess, controllerPermission.findPermission)
routePermission.post('/addPermission', auth.verifyToken, checkAcess, controllerPermission.addPermission)
routePermission.put('/updatePermission/:id', auth.verifyToken, checkAcess, controllerPermission.updatePermission)
routePermission.delete('/deletePermission/:id', auth.verifyToken, checkAcess, controllerPermission.deletePermission)

module.exports = routePermission