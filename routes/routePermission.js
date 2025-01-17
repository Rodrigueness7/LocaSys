const express = require('express')
const routePermission = express.Router()
const controller = require('../controller/controllerPermission')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routePermission.get('/findAllPermission', verifyToken, checkAcess, controller.findAll)
routePermission.get('/findPermission/:id', verifyToken, checkAcess, controller.find)
routePermission.post('/addPermission', verifyToken, checkAcess, controller.add)
routePermission.put('/updatePermission/:id', verifyToken, checkAcess, controller.update)
routePermission.delete('/deletePermission/:id', verifyToken, checkAcess, controller.remover)

module.exports = routePermission