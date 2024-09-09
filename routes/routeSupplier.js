const express = require('express')
const routeSupplier = express.Router()
const controllerSupplier = require('../controller/controllerSupplier')


routeSupplier.get('/findAllSupplier', controllerSupplier.findAll)
routeSupplier.get('/findSupplier/:id', controllerSupplier.findSupplier)
routeSupplier.post('/addSupplier', controllerSupplier.addSupplier)

module.exports = routeSupplier