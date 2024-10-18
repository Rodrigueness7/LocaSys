const express = require('express')
const routeUpload = express.Router()
const storage = require('../content/storageFile/storage')
const controllerUploadFile = require('../controller/controllerUploadFile')
const auth = require('../controller/auth')

routeUpload.post('/uploadFile', storage.uploadFiles().single('file'), auth.verifyToken, controllerUploadFile.uploadFile)
routeUpload.delete('/deleteFile', auth.verifyToken, controllerUploadFile.deleteFile)

module.exports = routeUpload