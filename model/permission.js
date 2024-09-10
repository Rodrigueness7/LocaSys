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

    set _perimission(value) {
        if(value == undefined) {
            throw new Error('Invalid permission')
        }
        return this.permission = value
    }

    async insertPermission(data) {
        const existPermission = await tbPermission.findAll({where: {permission: data.permission}})

        console.log(existPermission)
    }

}

module.exports = Permission