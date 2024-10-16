const express = require('express')
const routeUpload = express.Router()
const storage = require('../content/storageFile/storage')
const controllerUploadFile = require('../controller/controllerUploadFile')

routeUpload.post('/uploadFile', storage.uploadFiles().single('file'), controllerUploadFile.uploadFile)
routeUpload.delete('/deleteFile', controllerUploadFile.deleteFile)

module.exports = routeUpload