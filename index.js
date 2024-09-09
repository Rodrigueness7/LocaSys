require('dotenv').config()
const express = require('express')
const app = express()
const routeFilial = require('./routes/routeFilial')
const routeSector = require('./routes/routeSector')
const routeProfile = require('./routes/routeProfile')
const routeUser = require('./routes/routeUser')
const routeSupplier = require('./routes/routeSupplier')

app.use(express.urlencoded({extended: true}), express.json(), routeFilial)
app.use(express.urlencoded({extended: true}), express.json(), routeSector)
app.use(express.urlencoded({extended: true}), express.json(), routeProfile)
app.use(express.urlencoded({extended: true}), express.json(), routeUser)
app.use(express.urlencoded({extended: true}), express.json(), routeSupplier)


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