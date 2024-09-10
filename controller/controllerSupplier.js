const Supplier = require('../model/supplier')

const addSupplier = async (req, res) => {
    try {
        const supplier = new Supplier(req.body)
        await supplier.insertSupplier(supplier, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAll = async ( req, res) => {
    try {
        await Supplier.findAllSupplier(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findSupplier = async (req, res) => {
    try {
        await Supplier.findSupplier(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const updateSupplier = async (req, res) => {
    try {
        const supplier = new Supplier(req.body)
        supplier.updateSupplier(supplier, req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const deleteSupplier = async (req, res) => {
    try {
       await Supplier.removeSupplier(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {addSupplier, findAll, findSupplier, updateSupplier, deleteSupplier}