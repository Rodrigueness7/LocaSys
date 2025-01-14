const express = require('express')
const routeUser = express.Router()
const controllerUser = require('../controller/controllerUser')
const auth = require('../controller/auth')
const acess = require('../controller/checkAcess')

routeUser.get('/findAllUser', auth.verifyToken, acess.checkAcess('Atualizar'), controllerUser.findAllUser)
routeUser.get('/findUser', auth.verifyToken, controllerUser.findUser)
routeUser.get('/findIdUser/:id', auth.verifyToken, controllerUser.findIdUser)
routeUser.post('/login', controllerUser.login)
routeUser.post('/addUser', controllerUser.addUser)
routeUser.put('/updateUser/:id', auth.verifyToken, controllerUser.updateUser)
routeUser.put('/inactivateUser/:id', auth.verifyToken, controllerUser.inactivateUser)

module.exports = routeUser