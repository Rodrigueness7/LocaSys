const Supplier = require('../model/Supplier')

const add = async (req, res) => {
    try {
        const supplier = new Supplier(req.body)
        await supplier.insert(supplier, res, req)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const findAll = async ( req, res) => {
    try {
        await Supplier.selectAll(res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const find = async (req, res) => {
    try {
        await Supplier.select(req.params.id, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const update = async (req, res) => {
    try {
        const supplier = new Supplier(req.body)
        supplier.update(supplier, req, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const inactivate = async (req, res) => {
    try {
       await Supplier.inactivate(req, req.body.deletionDate, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

module.exports = {add, findAll, find, update, inactivate}