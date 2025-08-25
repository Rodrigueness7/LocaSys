const Type = require('../model/Type')

const add = async (req, res) => {
    try {
        const type = new Type(req.body)
        await type.insert(type, res, req)
    } catch (error) {
        res.status(400).json({errorMessage: error.message})
    }
}

const findAll = async (req, res) => {
    try {
        await Type.selectAll(res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const findId = async (req, res) => {
    try {
        await Type.selectId(req, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const update = async (req, res) => {
    try {
        const type = new Type(req.body)
        await type.update(req, type, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const remover = async (req, res) => {
    try {
        await Type.delete(req, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}


module.exports = {add, findAll, findId, update, remover}