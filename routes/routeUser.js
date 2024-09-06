const express = require('express')
const routeUser = express.Router()
const controllerUser = require('../controller/controllerUser')

routeUser.get('/findAllUser', controllerUser.findAllUser)
routeUser.get('/login', controllerUser.login)
routeUser.post('/addUser', controllerUser.addUser)

module.exports = routeUser