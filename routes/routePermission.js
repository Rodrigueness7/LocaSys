const express = require('express')
const routePermission = express.Router()
const controller = require('../controller/controllerPermission')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routePermission.get('/findAllPermission', verifyToken, checkAcess('permission'), controller.findAll)
routePermission.get('/findPermission/:id', verifyToken, checkAcess('permission'), controller.find)
routePermission.post('/addPermission', verifyToken, checkAcess('permission'), controller.add)
routePermission.put('/updatePermission/:id', verifyToken, checkAcess('permission'), controller.update)
routePermission.delete('/deletePermission/:id', verifyToken, checkAcess('permission'), controller.remover)

module.exports = routePermission