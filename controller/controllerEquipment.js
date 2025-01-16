const Equipment = require('../model/Equipment')

const add = async (req, res) => {
    try {
        const equipment = new Equipment(req.body)
        await equipment.insert(equipment, res, req)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAll = async (req, res) => {
    try {
       await Equipment.selectAll(res)
    } catch (error) {
        res,json({message: error.message})
    }
}

const findId = async (req, res) => {
    try {
        await Equipment.selectId(req.params.idEquipment, res)
    } catch (error) {
        res.json({message: error.message})
    }
} 

const find = async (req, res) => {
    try {
        await Equipment.select(req.body, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const equipment = new Equipment(req.body)
        await equipment.update(req, equipment, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const returned = async (req, res) => {
    try {
        await Equipment.return(req, req.body.returnDate, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const exportXlsx = async (req, res) => {
    try {
        let address = req.body.address + '\\equipment.xlsx'
        await Equipment.exportlXlsx(address, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const exportPdf = async (req, res) => {
    try {
        let address = req.body.address + '\\equipment.pdf'
        await Equipment.exportPdf(address, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {add, findAll, find, findId, update, returned ,exportXlsx, exportPdf}