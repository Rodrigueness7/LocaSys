const bcrypt = require('bcrypt')

const cryptPassword = async (password) => {
    const saltRound = 10
    const hash = await bcrypt.hash(password, saltRound)
    return hash
}

const checkPassword = async (password, hashSalveDatabase) => {
    const match = await bcrypt.compare(password, hashSalveDatabase)
    return match
}


module.exports = {cryptPassword, checkPassword}