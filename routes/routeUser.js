const express = require('express')
const routeUser = express.Router()
const controllerUser = require('../controller/controllerUser')

routeUser.get('/findAllUser', controllerUser.findAllUser)
routeUser.get('/findUser', controllerUser.findUser)
routeUser.get('/login', controllerUser.login)
routeUser.post('/addUser', controllerUser.addUser)
routeUser.put('/updateUser/:id', controllerUser.updateUser)
routeUser.delete('/deleteUser/:id', controllerUser.deleteUser)

module.exports = routeUser