const tbPermission = require('../constant/tbPermission')
const tbProfile = require('../constant/tbProfile')
const tbProfile_permission = require('../constant/tbProfile_permission')

class Profile_permission {
    idProfile_permission
    idProfile
    idPermission
    allow
  

    constructor(data) {
        this._idProfile_permission = data.idProfile_permission
        this._idProfile = data.idProfile
        this._idPermission = data.idPermission
        this._allow = data.allow

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

    get _allow(){
        return this.allow
    }

    set _allow(value){
        if(value === undefined){
            throw new Error('Invalid allwo')
        }
        return this.allow = value
    }

    async insert(data, req, res) {
       const idProfile = await tbProfile.findOne({where: {profile: req.profile}, attributes: ['idProfile']})
       data.idProfile = idProfile.dataValues.idProfile
       
       const existprofile_permission = await tbProfile_permission.findOne({where: {idProfile: data.idProfile, idPermission: req.idPermission}})
        if(existprofile_permission) {
            throw new Error('Permission already exists for this profile')
        }
       
        await tbProfile_permission.create(data)
        res.json({message: 'Add successfuly'})
    }

    static async selectAll(res) {
        const result = (await tbProfile_permission.findAll({attributes: ['idProfile_permission', 'allow'],
            include: [{model: tbProfile, attributes: ['profile']},{model: tbPermission, attributes: ['permission']}]})).
            map(data => data.dataValues)
        res.json(result)
    }


    static async select(idProfile, permission, section) {
        const result = (await tbProfile_permission.findOne({attributes: ['idProfile_permission', 'allow'],
            include: [{model: tbProfile, attributes: ['profile'], where: {idProfile: idProfile}},{model: tbPermission, attributes: ['permission', 'section'], where: {permission: permission, section: section}}]}))

           return result
    }

    static async selectId(req, res) {
        await tbProfile_permission.findByPk(req, {attributes: ['idProfile_permission', 'allow'], include: [{model: tbProfile, attributes: ['profile']}, {model: tbPermission, attributes: ['permission']}]}).then(
            idPermission_permission => res.json(idPermission_permission.dataValues)
        )
    }

    async update(req, data, res) {
        const alterProfile_permission = await tbProfile_permission.findByPk(req)

        alterProfile_permission.idProfile_permission = data.idPermission_permission
        alterProfile_permission.idProfile = data.idProfile
        alterProfile_permission.idPermission = data.idPermission
        alterProfile_permission.allow = data.allow

        await alterProfile_permission.save()
        res.json({message: 'Updated successfully'})
    }

    static async delete(req, res) {
        await tbProfile_permission.findByPk(req).then(
            removerProfile_permission => removerProfile_permission.destroy()
        )
        res.json({message: 'Deleted successfully'})
    }
}

module.exports = Profile_permission