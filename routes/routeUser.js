const express = require('express')
const routeUser = express.Router()
const controllerUser = require('../controller/controllerUser')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeUser.get('/findAllUser', auth.verifyToken, checkAcess, controllerUser.findAllUser)
routeUser.get('/findUser', auth.verifyToken, checkAcess, controllerUser.findUser)
routeUser.get('/findIdUser/:id', auth.verifyToken, controllerUser.findIdUser)
routeUser.post('/login', controllerUser.login)
routeUser.post('/addUser', checkAcess, controllerUser.addUser)
routeUser.put('/updateUser/:id', auth.verifyToken, checkAcess, controllerUser.updateUser)
routeUser.put('/inactivateUser/:id', auth.verifyToken, checkAcess, controllerUser.inactivateUser)

module.exports = routeUser