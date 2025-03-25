const express = require('express')
const routeContact = express.Router()
const controller = require('../controller/controllerContact')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeContact.get('/findAllContact', verifyToken, checkAcess('contact'), controller.findAll)
routeContact.get('/findContact/:id', verifyToken,checkAcess('contact'), controller.findId)
routeContact.post('/addContact', verifyToken, checkAcess('contact'), controller.add)
routeContact.put('/updateContact/:id', verifyToken, checkAcess('contact'), controller.update)
routeContact.put('/inactivateContact/:id', verifyToken, checkAcess('contact'), controller.inactivate)



module.exports = routeContact