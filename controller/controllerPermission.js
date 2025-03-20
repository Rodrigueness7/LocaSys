const Permission = require('../model/Permission')

const add = async (req, res) => {
    try {
        const permission = new Permission(req.body)
       await permission.insert(permission, res, req)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const findAll = async (req, res) => {
    try {
        await Permission.selectAll(res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const find = async (req, res) => {
    try {
        await Permission.select(res, req.params.id)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const update = async (req, res) => {
    try {
        const permission = new Permission(req.body)
       await permission.update(permission, req, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const remover = async (req, res) => {
    try {
       await Permission.removerPermission(req, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}


module.exports = {add, findAll, find, update, remover}