const express = require('express')
const routeUpload = express.Router()
const upload = require('../content/storageFile/storage')
const controllerUpload = require('../controller/controllerUpload')

routeUpload.post('/upload', upload.single('file'), controllerUpload.uploadFile)


module.exports = routeUpload