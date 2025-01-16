const express = require('express')
const routeContact = express.Router()
const controllerContact = require('../controller/controllerContact')
const auth = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeContact.get('/findAllContact', auth.verifyToken, checkAcess, controllerContact.findAllContact)
routeContact.get('/findContact/:id', auth.verifyToken, checkAcess, controllerContact.findContact)
routeContact.post('/addContact', auth.verifyToken, checkAcess, controllerContact.addContact)
routeContact.put('/updateContact/:id', auth.verifyToken, checkAcess, controllerContact.updateContact)
routeContact.put('/inactivateContact/:idContact', auth.verifyToken, checkAcess, controllerContact.inactivateContact)



module.exports = routeContact