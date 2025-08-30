const TypeEquipment = require('../model/TypeEquipment')

const add = async (req, res) => {
    try {
        const typeEquipment = new TypeEquipment(req.body)
        await typeEquipment.insert(typeEquipment, res, req)
    } catch (error) {
        res.status(400).json({errorMessage: error.message})
    }
}

const findAll = async (req, res) => {
    try {
        await TypeEquipment.selectAll(res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const findId = async (req, res) => {
    try {
        await TypeEquipment.selectId(req, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const update = async (req, res) => {
    try {
        const typeEquipment = new TypeEquipment(req.body)
        await typeEquipment.update(req, typeEquipment, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const remover = async (req, res) => {
    try {
        await TypeEquipment.delete(req, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}


module.exports = {add, findAll, findId, update, remover}