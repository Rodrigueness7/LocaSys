const express = require('express');
const routeSituation = express.Router();
const controller = require('../controller/controllerSituation');
const {verifyToken} = require('../controller/auth')
const {checkAcess} = require('../controller/checkAcess')


routeSituation.get('/findAllSituation', verifyToken, checkAcess('situation'), controller.findAll)
routeSituation.get('/findSituation/:id', verifyToken, checkAcess('situation'), controller.findById)


module.exports = routeSituation