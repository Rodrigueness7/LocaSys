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
        await equipment.updateEquipment(req.params.idEquipment, equipment, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const exportFileXlsx = async (req, res) => {
    try {
        let address = req.body.address + '\\equipment.xlsx'
        await Equipment.exportEquipmentlXlsx(address, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const exportFilePdf = async (req, res) => {
    try {
        let address = req.body.address + '\\equipment.pdf'
        await Equipment.exportEquipmentPdf(address, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {addEquipment, findAllEquipment, findEquipment, updateEquipment, exportFileXlsx, exportFilePdf}