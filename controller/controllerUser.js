const User = require('../model/User')


const addUser = async (req, res) => {
    try {
        const user = new User(req.body)
    await user.insertUser(user, req.body.username, req.body.email, res, req)
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

const findIdUser = async (req, res) => {
    try {
        await User.selectIdUser(req.params.id, res)
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

const inactivateUser = async (req, res) => {
    try {
        User.inactivateUser(req.params.id, req.body.deletionDate, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {addUser, findAllUser, findIdUser, findUser, login, updateUser, inactivateUser}