const express = require('express')
const routeBranch = express.Router()
const controller = require('../controller/controllerBranch')
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')

routeBranch.get('/findAllBranch', verifyToken, checkAcess('branch'), controller.findAll)
routeBranch.get('/findBranch/:idBranch', verifyToken, checkAcess('branch'), controller.findId)
routeBranch.post('/addBranch', checkAcess('branch'), controller.add)
routeBranch.put('/updateBranch/:idBranch', verifyToken, checkAcess('branch'), controller.update)
routeBranch.put('/inactivateBranch/:idFBranch', verifyToken, checkAcess('branch'), controller.inactivate)


module.exports = routeBranch;