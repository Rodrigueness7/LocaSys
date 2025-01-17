const express = require('express')
const routeUser = express.Router()
const controller = require('../controller/controllerUser')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeUser.get('/findAllUser', verifyToken, checkAcess, controller.findAll)
routeUser.get('/findUser', verifyToken, checkAcess, controller.find)
routeUser.get('/findIdUser/:id', verifyToken, controller.findId)
routeUser.post('/login', controller.login)
routeUser.post('/addUser', checkAcess, controller.add)
routeUser.put('/updateUser/:id', verifyToken, checkAcess, controller.update)
routeUser.put('/inactivateUser/:id', verifyToken, checkAcess, controller.inactivate)

module.exports = routeUser