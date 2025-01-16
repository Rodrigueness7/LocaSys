const express = require('express')
const routeSupplier = express.Router()
const controllerSupplier = require('../controller/controllerSupplier')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeSupplier.get('/findAllSupplier', auth.verifyToken, checkAcess, controllerSupplier.findAll)
routeSupplier.get('/findSupplier/:id', auth.verifyToken, checkAcess, controllerSupplier.findSupplier)
routeSupplier.post('/addSupplier', auth.verifyToken, checkAcess, controllerSupplier.addSupplier)
routeSupplier.put('/updateSupplier/:id', auth.verifyToken, checkAcess, controllerSupplier.updateSupplier)
routeSupplier.put('/inactivateSupplier/:idSupplier', auth.verifyToken, checkAcess, controllerSupplier.inactivateSupplier)


module.exports = routeSupplier