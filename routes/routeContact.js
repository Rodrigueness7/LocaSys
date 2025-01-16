const express = require('express')
const routeContact = express.Router()
const controller = require('../controller/controllerContact')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeContact.get('/findAllContact', verifyToken, checkAcess, controller.findAll)
routeContact.get('/findContact/:id', verifyToken, checkAcess, controller.findId)
routeContact.post('/addContact', verifyToken, checkAcess, controller.add)
routeContact.put('/updateContact/:id', verifyToken, checkAcess, controller.update)
routeContact.put('/inactivateContact/:idContact', verifyToken, checkAcess, controller.inactivate)



module.exports = routeContact