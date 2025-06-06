const xlsx = require('../content/readFile/xlsx')
const EquipmentRental = require('../model/EquipmentRental')

const addFile = async (req, res) => {
    try {
        await xlsx.readXlsx(req.body)
        res.json({successMessage: 'Add successfully'})
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const findAll = async (req, res) => {
    try {
        await EquipmentRental.selectAll(res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const find = async (req, res) => {
    try {
        await EquipmentRental.select(req.body, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const findId = async (req, res) => {
    try {
        await EquipmentRental.selectId(req.params.idEquipmentRental, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const removerAll = async (req, res) => {
    try {
        await EquipmentRental.delete(res, req.body)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}



module.exports = {addFile, findAll ,find, findId, removerAll}