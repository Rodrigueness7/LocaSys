const express = require('express')
const routeUser = express.Router()
const controllerUser = require('../controller/controllerUser')

routeUser.post('/addUser', controllerUser.addUser)

module.exports = routeUser