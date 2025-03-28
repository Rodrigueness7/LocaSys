const express = require('express')
const routeUser = express.Router()
const controller = require('../controller/controllerUser')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeUser.get('/findAllUser', verifyToken, checkAcess('user'), controller.findAll)
routeUser.get('/findUser', verifyToken, checkAcess('user'), controller.find)
routeUser.get('/findIdUser/:id', verifyToken, controller.findId)
routeUser.get('/login', controller.login)
routeUser.post('/addUser', checkAcess('user'), controller.add)
routeUser.put('/updateUser/:id', verifyToken, checkAcess('user'), controller.update)
routeUser.put('/inactivateUser/:id', verifyToken, checkAcess('user'), controller.inactivate)

module.exports = routeUser