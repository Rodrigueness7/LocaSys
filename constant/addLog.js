const Log = require("../model/Log")
const DecodeToken = require('../constant/decodeToken')

function CreateLog(data, req) {
    let log = new Log({
        idLog: 0,
        action: 'Adicionado',
        description: `Adicionado usuário ${data.username}`,
        idUser: DecodeToken.DecryptToken(req)
    })
    
    return log.insertLog(log)
}

module.exports = {CreateLog}