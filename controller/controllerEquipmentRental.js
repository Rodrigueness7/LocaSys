const xlsx = require('../content/readFile/xlsx')
const EquipmentRental = require('../model/EquipmentRental')

const addFile = async (req, res) => {
    try {
        await xlsx.readXlsx(req.body.cell1, req.body.cell2)
        res.json({message: 'Add successfully'})
    } catch (error) {
        res.json({ message: error.message })
    }
}

const findAllEquipmentRental = async (req, res) => {
    try {
        await EquipmentRental.selectAllEquipmentRental(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findEquipmentRental = async (req, res) => {
    try {
        await EquipmentRental.selectEquipmentRental(req.body, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findEquipmentRentalId = async (req, res) => {
    try {
        await EquipmentRental.selectEquipmentRentalId(req.params.idEquipmentRental, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const removerAllEquipmentRental = async (req, res) => {
    try {
        await EquipmentRental.deleteAllEquipmentRental(res)
    } catch (error) {
        res.json({message: error.message})
    }
}



module.exports = {addFile, findAllEquipmentRental ,findEquipmentRental, findEquipmentRentalId, removerAllEquipmentRental}