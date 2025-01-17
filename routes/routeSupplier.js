const express = require('express')
const routeSupplier = express.Router()
const controller = require('../controller/controllerSupplier')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeSupplier.get('/findAllSupplier', verifyToken, checkAcess, controller.findAll)
routeSupplier.get('/findSupplier/:id', verifyToken, checkAcess, controller.find)
routeSupplier.post('/addSupplier', verifyToken, checkAcess, controller.add)
routeSupplier.put('/updateSupplier/:id', verifyToken, checkAcess, controller.update)
routeSupplier.put('/inactivateSupplier/:idSupplier', verifyToken, checkAcess, controller.inactivate)


module.exports = routeSupplier