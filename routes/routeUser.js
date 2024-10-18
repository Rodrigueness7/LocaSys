const express = require('express')
const routeUser = express.Router()
const controllerUser = require('../controller/controllerUser')
const auth = require('../controller/auth')

routeUser.get('/findAllUser', auth.verifyToken, controllerUser.findAllUser)
routeUser.get('/findUser', auth.verifyToken, controllerUser.findUser)
routeUser.get('/login', controllerUser.login)
routeUser.post('/addUser', auth.verifyToken, controllerUser.addUser)
routeUser.put('/updateUser/:id', auth.verifyToken, controllerUser.updateUser)
routeUser.delete('/deleteUser/:id', auth.verifyToken, controllerUser.deleteUser)

module.exports = routeUser