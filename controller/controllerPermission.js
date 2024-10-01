const Permission = require('../model/Permission')

const addPermission = async (req, res) => {
    try {
        const permission = new Permission(req.body)
       await permission.insertPermission(permission, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAllPermission = async (req, res) => {
    try {
        await Permission.selectAllPermission(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findPermission = async (req, res) => {
    try {
        await Permission.selectPermission(res, req.params.id)
    } catch (error) {
        res.json({message: error.message})
    }
}

const updatePermission = async (req, res) => {
    try {
        const permission = new Permission(req.body)
       await permission.UpdatePermission(permission, req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const deletePermission = async (req, res) => {
    try {
       await Permission.removerPermission(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}


module.exports = {addPermission, findAllPermission, findPermission, updatePermission, deletePermission}