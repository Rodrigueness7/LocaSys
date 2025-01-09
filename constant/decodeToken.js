const jwt = require('jsonwebtoken')
require('dotenv').config()

function DecryptToken(req) {
    let headers = req.headers['authorization']
    let decode = jwt.verify(headers, process.env.secret_key)

    return decode.idUser
}

module.exports = {DecryptToken}