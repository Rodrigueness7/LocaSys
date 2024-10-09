const express = require('express')
const routeUpload = express.Router()
const storage = require('../content/storageFile/storage')
const controllerUpload = require('../controller/controllerUpload')

routeUpload.post('/upload', storage.upload().single('file'), controllerUpload.uploadFile)
routeUpload.delete('/delete', controllerUpload.deleteFile)

module.exports = routeUpload