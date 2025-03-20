const tbPermission = require('../constant/tbPermission')
const AddLog = require('../constant/addLog')

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

    async insert(data, res, req) {
        const existPermission = await tbPermission.findOne({where: {permission: data.permission}})

        if(existPermission) {
            throw new Error('exist already permission')
        }
        await tbPermission.create(data)
        AddLog.CreateLog(data.permission, 'Adicionado', 'Adicionado Permissão', req)
        
        res.json({successMessage: 'Add successufully'})
    }

    static async selectAll(res) {
        const result = (await tbPermission.findAll()).map(
            permissions => permissions.dataValues
        )
        res.json(result)
    }

    static async select(res, req) {
        await tbPermission.findByPk(req).then(
            permission => res.json(permission.dataValues)
        )
    }

    async update(data, req, res) {
        const alterPermission = await tbPermission.findByPk(req.params.id)

        alterPermission.permission = data.permission

        await alterPermission.save()
        AddLog.CreateLog(data.permission, 'Atualizado', 'Atualizado Permissão', req)
        res.json({successMessage: 'updated successfully'})
        
    } 

    static async remover(req, res) {
        const deletePermission = await tbPermission.findByPk(req.params.id)

        deletePermission.destroy()
        AddLog.CreateLog(deletePermission.dataValues.permission, 'Deletado', 'Deletado Permissão', req)
        res.json({successMessage: 'Delete successfully'})
    }

}

module.exports = Permission