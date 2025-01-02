const express = require('express')
const routeContact = express.Router()
const controllerContact = require('../controller/controllerContact')
const auth = require('../controller/auth')

routeContact.get('/findAllContact', auth.verifyToken, controllerContact.findAllContact)
routeContact.get('/findContact/:id', auth.verifyToken, controllerContact.findContact)
routeContact.post('/addContact', auth.verifyToken, controllerContact.addContact)
routeContact.put('/updateContact/:id', auth.verifyToken, controllerContact.updateContact)
routeContact.put('/inactivateContact/:idContact', auth.verifyToken, controllerContact.inactivateContact)



module.exports = routeContact