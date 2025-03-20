const Equipment = require('../model/Equipment')

const add = async (req, res) => {
    try {
        const equipment = new Equipment(req.body, req)
        await equipment.insert(equipment, res, req)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAll = async (req, res) => {
    try {
       await Equipment.selectAll(res, req)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findId = async (req, res) => {
    try {
        await Equipment.selectId(req, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
} 

const find = async (req, res) => {
    try {
        await Equipment.select(req.body, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const update = async (req, res) => {
    try {
        const equipment = new Equipment(req.body, req)
        await equipment.update(req, equipment, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const returned = async (req, res) => {
    try {
        await Equipment.return(req, req.body.returnDate, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const exportXlsx = async (req, res) => {
    try {
        let address = req.body.address + '\\equipment.xlsx'
        await Equipment.exportlXlsx(address, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const exportPdf = async (req, res) => {
    try {
        let address = req.body.address + '\\equipment.pdf'
        await Equipment.export(address, req.body, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

module.exports = {add, findAll, find, findId, update, returned ,exportXlsx, exportPdf}