require('dotenv').config()
const express = require('express')
const app = express()


app.listen(process.env.PORT, (error) => {
    try {
        if(error) {
            throw new Error('Server not is running')
        }
        console.log(`Server is running in port: ${process.env.PORT}`)
    } catch (error) {
        console.error(error.message)
    }
})