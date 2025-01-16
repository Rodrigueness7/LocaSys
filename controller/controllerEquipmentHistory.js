const EquipmentHistory = require('../model/EquipmentHistory')

const add = async (req, res) => {
    try {
        const equipmentHistory = new EquipmentHistory(req.body)
        await equipmentHistory.insert(equipmentHistory, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAll = async (req, res) => {
    try {
        await EquipmentHistory.selectAll(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findId = async (req, res) => {
    try {
        await EquipmentHistory.selectId(req.params.idEquipmentHistory, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const find = async (req, res) => {
    try {
        await EquipmentHistory.select(req.body, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const equipmentHistory = new EquipmentHistory(req.body)
        await equipmentHistory.update(equipmentHistory, req.params.idEquipmentHistory, res) 
    } catch (error) {
        res.json({message: error.message})
    }
} 

module.exports = {add, findAll, findId, find, update}