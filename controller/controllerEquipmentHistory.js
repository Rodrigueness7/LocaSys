const EquipmentHistory = require('../model/EquipmentHistory')

const addEquipmentHistory = async (req, res) => {
    try {
        const equipmentHistory = new EquipmentHistory(req.body)
        await equipmentHistory.insertEquipmentHistory(equipmentHistory, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAllEquipmentHistory = async (req, res) => {
    try {
        await EquipmentHistory.selectAllEquipmentHistory(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findEquipmentHistory = async (req, res) => {
    try {
        await EquipmentHistory.selectEquipmentHistory(req.body, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const updateEquipmentHistory = async (req, res) => {
    try {
        const equipmentHistory = new EquipmentHistory(req.body)
        await equipmentHistory.UpdateEquipamentHistory(equipmentHistory, req.params.idEquipmentHistory, res) 
    } catch (error) {
        res.json({message: error.message})
    }
} 

module.exports = {addEquipmentHistory, findAllEquipmentHistory, findEquipmentHistory, updateEquipmentHistory}