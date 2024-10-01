const User = require('../model/User')

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
    await User.selectAllUser(res)
   } catch (error) {
    res.json({message: error.message})
   }
}

const findUser = async (req, res) => {
    try {
        await User.selectUser(req.body, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const login = async (req, res) => {
    try {
        await User.login(req.body.username, req.body.password, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const updateUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.updateUser(user, req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const deleteUser = async (req, res) => {
    try {
        User.removerUser(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {addUser, findAllUser, findUser, login, updateUser, deleteUser}