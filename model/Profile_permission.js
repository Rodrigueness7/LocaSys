const tbPermission = require('../constant/tbPermission')
const tbProfile = require('../constant/tbProfile')
const tbProfile_permission = require('../constant/tbProfile_permission')

class Profile_permission {
    idProfile_permission
    idProfile
    idPermission
    allwo

    constructor(data) {
        this._idProfile_permission = data.idProfile_permission
        this._idProfile = data.idProfile
        this._idPermission = data.idPermission
        this._allwo = data.allwo

    }

    get _idProfile_permission() {
        return this.idProfile_permission
    }

    set _idProfile_permission(value) {
        if(value == undefined) {
            return this.idProfile_permission = 0
        }
        return this.idProfile_permission = value
    }

    get _idProfile() {
        return this.idProfile
    }

    set _idProfile(value) {
        if(value == undefined) {
            throw new Error('Invalid idProfile')
        }
        return this.idProfile = value
    }

    get _idPermission(){
        return this.idPermission
    }

    set _idPermission(value) {
        if(value == undefined) {
            throw new Error('Invalid idPermission')
        }
        return this.idPermission = value
    }

    get _allwo() {
        return this.allwo
    }

    set _allwo(value) {
        if(value == undefined) {
            throw new Error('Invalid allwo')
        }
        return this.allwo = value
    }

    async insertProfile_permission(data, res) {
        await tbProfile_permission.create(data)
        res.json({message: 'Add successfuly'})
    }

    static async selectAllProfile_permission(res) {
        const result = (await tbProfile_permission.findAll({attributes: ['idProfile_permission', 'allwo'],
            include: [{model: tbProfile, attributes: ['profile']},{model: tbPermission, attributes: ['permission']}]})).
            map(data => data.dataValues)
        res.json(result)
    }

    async updateProfile_permission(req, data, res) {
        const valueId = await tbProfile_permission.findByPk(req)

        valueId.idProfile_permission = data.idPermission
        valueId.idProfile = data.idProfile
        valueId.idPermission = data.idPermission
        valueId.allwo = data.allwo

        await valueId.save()
        res.json({message: 'Updated successfully'})
    }

    static async deleteProfile_permission(req, res) {
        await tbProfile_permission.findByPk(req).then(
            removerProfile_permission => removerProfile_permission.destroy()
        )
        res.json({message: 'Deleted successfully'})
    }
}

module.exports = Profile_permission