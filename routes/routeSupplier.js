const express = require('express')
const routeSupplier = express.Router()
const controller = require('../controller/controllerSupplier')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeSupplier.get('/findAllSupplier', verifyToken, checkAcess('supplier'), controller.findAll)
routeSupplier.get('/findSupplier/:id', verifyToken, checkAcess('supplier'), controller.find)
routeSupplier.post('/addSupplier', verifyToken, checkAcess('supplier'), controller.add)
routeSupplier.put('/updateSupplier/:id', verifyToken, checkAcess('supplier'), controller.update)
routeSupplier.put('/inactivateSupplier/:idSupplier', verifyToken, checkAcess('supplier'), controller.inactivate)


module.exports = routeSupplier