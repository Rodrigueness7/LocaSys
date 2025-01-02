const Supplier = require('../model/Supplier')

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
        await Supplier.selectAllSupplier(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findSupplier = async (req, res) => {
    try {
        await Supplier.selectSupplier(req.params.id, res)
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

const inactivateSupplier = async (req, res) => {
    try {
       await Supplier.inactivateSupplier(req.params.idSupplier, req.body.deletionDate, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {addSupplier, findAll, findSupplier, updateSupplier, inactivateSupplier}