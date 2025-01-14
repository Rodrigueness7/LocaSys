const Log = require("../model/Log")
const DecodeToken = require('../constant/decodeToken')

function CreateLog(data, action, description, req) {
    let log = new Log({
        idLog: 0,
        action: action,
        description: description + ' ' + data,
        idUser: DecodeToken.DecryptToken(req).idUser
    })
    
    return log.insertLog(log)
}

module.exports = {CreateLog}