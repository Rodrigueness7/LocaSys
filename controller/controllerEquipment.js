const Equipment = require('../model/Equipment')

const addEquipment = async (req, res) => {
    try {
        const equipment = new Equipment(req.body)
        await equipment.insertEquipment(equipment, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAllEquipment = async (req, res) => {
    try {
       await Equipment.selectAllEquipment(res)
    } catch (error) {
        res,json({message: error.message})
    }
}

const findEquipment = async (req, res) => {
    try {
        await Equipment.selectEquipment(req.body, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const updateEquipment = async (req, res) => {
    try {
        const equipment = new Equipment(req.body)
        await equipment.updateEquipment(req.params.codProd, equipment, res)
    } catch (error) {
        res.json({message: error.message})
    }
}


module.exports = {addEquipment, findAllEquipment, findEquipment, updateEquipment}