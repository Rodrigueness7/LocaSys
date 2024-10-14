require('dotenv').config()
const express = require('express')
const app = express()
const routeFilial = require('./routes/routeFilial')
const routeSector = require('./routes/routeSector')
const routeProfile = require('./routes/routeProfile')
const routeUser = require('./routes/routeUser')
const routeSupplier = require('./routes/routeSupplier')
const routePermission = require('./routes/routePermission')
const routeContact = require('./routes/routeContact')
const routeLog = require('./routes/routeLog')
const routeProfile_permission = require('./routes/routeProfile_permission')
const routeEquipment = require('./routes/routeEquipment')
const routeEquipmentHistory = require('./routes/routeEquipmentHistory')
const routeUploadFile = require('./routes/routeUploadFile')
const routeFile = require('./routes/routeFile')
const cors = require('cors')

app.use(express.urlencoded({extended: true}), express.json(), cors(), routeFilial)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeSector)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeProfile)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeUser)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeSupplier)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routePermission)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeContact)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeLog)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeProfile_permission)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeEquipment)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeEquipmentHistory)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeUploadFile)
app.use(express.urlencoded({extended: true}), express.json(), cors(), routeFile)

app.listen(process.env.PORT, (error) => {
    try {
        if(error) {
            throw new Error('Server is not running')
        }
        console.log(`Server is running in port:${process.env.PORT}`)
    } catch (error) {
        console.log(error.message)
    }
})