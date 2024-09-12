const express = require('express')
const routeContact = express.Router()
const controllerContact = require('../controller/controllerContact')

routeContact.get('/findAllContact', controllerContact.findAllContact)
routeContact.get('/findContact/:id', controllerContact.findContact)
routeContact.post('/addContact', controllerContact.addContact)
routeContact.put('/updateContact/:id', controllerContact.updateContact)
routeContact.delete('/deleteContact/:id', controllerContact.deleteContact)



module.exports = routeContact