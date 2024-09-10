const Permission = require('../model/permission')

const addPermission = async (req, res) => {
        try {
            const permission = new Permission(req.body)
            permission.insertPermission(permission)
            res.json({message: 'add successfully'})
        } catch (error) {
            res.json({message: error.message})
        }
}


module.exports = {addPermission}