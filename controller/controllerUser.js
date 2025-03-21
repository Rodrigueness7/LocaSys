
const User = require('../model/User')


const add = async (req, res) => {
    try {
        const user = new User(req.body, req)
    await user.insert(user, req.body.username, req.body.email, res, req)
    } catch (error) {
        res.json({ErrorMessage: error.message})
    }
}

const findAll = async (req, res) => {
   try {
    await User.selectAll(res, req)
   } catch (error) {
    res.json({ErrorMessage: error.message})
   }
}

const findId = async (req, res) => {
    try {
        await User.selectId(req, res)
    } catch (error) {
        res.json({ErrorMessage: error.message})
    }
}

const find = async (req, res) => {
    try {
        await User.select(req.body, res)
    } catch (error) {
        res.json({ErrorMessage: error.message})
    }
}

const login = async (req, res) => {
    try {
        await User.login(req.body.username, req.body.password, res)
    } catch (error) {
        res.json({ErrorMessage: error.message})
    }
}

const update = async (req, res) => {
    try {
        const user = new User(req.body, req)
        await user.update(user, req, res)
    } catch (error) {
        res.json({ErrorMessage: error.message})
    }
}

const inactivate = async (req, res) => {
    try {
        User.inactivateUser(req, req.body.deletionDate, res)
    } catch (error) {
        res.json({ErrorMessage: error.message})
    }
}

module.exports = {add, findAll, findId, find, login, update, inactivate}