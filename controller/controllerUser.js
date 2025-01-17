
const User = require('../model/User')


const add = async (req, res) => {
    try {
        const user = new User(req.body)
    await user.insert(user, req.body.username, req.body.email, res, req)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAll = async (req, res) => {
   try {
    await User.selectAll(res)
   } catch (error) {
    res.json({message: error.message})
   }
}

const findId = async (req, res) => {
    try {
        await User.selectId(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const find = async (req, res) => {
    try {
        await User.select(req.body, res)
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

const update = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.update(user, req, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const inactivate = async (req, res) => {
    try {
        User.inactivateUser(req, req.body.deletionDate, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {add, findAll, findId, find, login, update, inactivate}