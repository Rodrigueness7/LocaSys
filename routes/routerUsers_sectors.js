const express = require('express');
const routeUsers_sectors = express.Router();
const controller = require('../controller/controllerUsers_sectors');
const { verifyToken } = require('../controller/auth');
const { checkAcess } = require('../controller/checkAcess');


routeUsers_sectors.get('/findAllUser_sector', verifyToken, checkAcess('users_sectors'), controller.findAll);
routeUsers_sectors.get('/findIdUser_sector/:id', verifyToken, checkAcess('users_sectors'), controller.findId);
routeUsers_sectors.post('/addUser_sector', verifyToken, checkAcess('users_sectors'), controller.add);
routeUsers_sectors.put('/updateUser_sector', verifyToken, checkAcess('users_sectors'), controller.update);
routeUsers_sectors.delete('/deleteUser_sector/:id',verifyToken, checkAcess('users_sectors'), controller.remover);


module.exports = routeUsers_sectors;