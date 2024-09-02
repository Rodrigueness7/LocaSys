require('dotenv').config()
const express = require('express')
const app = express()
const routeFilial = require('./routes/routeFilial')
const routeSector = require('./routes/routeSector')

app.use(express.urlencoded({extended: true}), express.json(), routeFilial)
app.use(express.urlencoded({extended: true}), express.json(), routeSector)


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