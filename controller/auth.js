require('dotenv').config()
const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    const token = req.headers['authorization']

    if(!token ) {
        return res.json({message: 'Invalid token'})
    }

    jwt.verify(token, process.env.secret_key, (error) => {
        if(error) {
            return res.json({message: 'Invalid or expired token'})
        }
        next()
    })
}

module.exports = {verifyToken}