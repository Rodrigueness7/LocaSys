const express = require('express')
const routeUpload = express.Router()
const storage = require('../content/storageFile/storage')
const controllerUploadFile = require('../controller/controllerUploadFile')

routeUpload.post('/upload', storage.upload().single('file'), controllerUploadFile.uploadFile)
routeUpload.delete('/delete', controllerUploadFile.deleteFile)

module.exports = routeUpload