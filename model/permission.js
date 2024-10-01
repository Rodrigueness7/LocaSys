const tbPermission = require('../constant/tbPermission')

class Permission {
    idPermission
    permission

    constructor(data) {
        this._idPermission = data.idPermission
        this._permission = data.permission
    }

    get _idPermission() {
        return this.idPermission
    }

    set _idPermission(value) {
        if(value == undefined) {
            return this.idPermission = 0
        }
        return this.idPermission = value
    }

    get _permission() {
        return this.permission
    }

    set _permission(value) {
        if(value == undefined) {
            throw new Error('Invalid permission')
        }
        return this.permission = value
    }

    async insertPermission(data, res) {
        const existPermission = await tbPermission.findOne({where: {permission: data.permission}})

        if(existPermission) {
            throw new Error('exist already permission')
        }
        await tbPermission.create(data)
        res.json({message: 'Add successufully'})
    }

    static async selectAllPermission(res) {
        const result = (await tbPermission.findAll()).map(
            permissions => permissions.dataValues
        )
        res.json(result)
    }

    static async selectPermission(res, req) {
        await tbPermission.findByPk(req).then(
            permission => res.json(permission.dataValues)
        )
    }

    async UpdatePermission(data, req, res) {
        const permissionId = await tbPermission.findByPk(req)

        permissionId.permission = data.permission

        await permissionId.save()
        res.json({message: 'updated successfully'})
        
    } 

    static async removerPermission(req, res) {
        await tbPermission.findByPk(req).then(
            permission => permission.destroy()
        )
        res.json({message: 'Delete successfully'})
    }

}

module.exports = Permission