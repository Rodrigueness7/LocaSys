const User = require('../model/user')

const addUser = async (req, res) => {
    try {
        const user = new User(req.body)
    await user.insertUser(user, req.body.username, req.body.email, res)
    
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {addUser}