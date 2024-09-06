const User = require('../model/user')

const addUser = async (req, res) => {
    try {
        const user = new User(req.body)
    await user.insertUser(user, req.body.username, req.body.email, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAllUser = async (req, res) => {
   try {
    await User.findAllUser(res)
   } catch (error) {
    res.json({message: error.message})
   }
}

const login = async (req, res) => {
    try {
        await User.findUser(req.body.username, req.body.password, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {addUser, findAllUser, login}