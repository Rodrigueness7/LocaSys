const express = require('express')
const routeSupplier = express.Router()
const controllerSupplier = require('../controller/controllerSupplier')
const auth = require('../controller/auth')

routeSupplier.get('/findAllSupplier', auth.verifyToken, controllerSupplier.findAll)
routeSupplier.get('/findSupplier/:id', auth.verifyToken, controllerSupplier.findSupplier)
routeSupplier.post('/addSupplier', auth.verifyToken, controllerSupplier.addSupplier)
routeSupplier.put('/updateSupplier/:id', auth.verifyToken, controllerSupplier.updateSupplier)
routeSupplier.put('/inactivateSupplier/:id', auth.verifyToken, controllerSupplier.inactivateSupplier)


module.exports = routeSupplier