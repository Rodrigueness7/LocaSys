const express = require('express')
const routeFilial = express.Router()
const controller = require('../controller/controllerFilial')


routeFilial.get('/findFilial', controller.findAllFilial)
routeFilial.post('/addFilial', controller.addFilial)
routeFilial.put('/updateFilial/:id', controller.updateFilial)
routeFilial.delete('/deleteFilial/:id', controller.removerFilial)

module.exports = routeFilial;