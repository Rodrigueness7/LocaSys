const tbProfile = require('../constant/tbProfile')
const AddLog = require('../constant/addLog')
const tbUser = require('../constant/tbUser')

class Profile {
    idProfile
    profile

    constructor(data) {
        this._idProfile = data.idProfile,
        this._profile = data.profile
    }

    get _idProfile() {
        return this.idProfile
    }

    set _idProfile(value) {
        if (value == undefined) {
            return this.idProfile = 0
        }
        return this.idProfile = value
    }

    get _profile() {
        return this.profile
    }

    set _profile(value) {
        if (value == undefined || value == '') {
            throw new Error('Invalid profile')
        }
        return this.profile = value
    }

    async insert(data, res, req) {
        const existProfile = await tbProfile.findOne({ where: { profile: data.profile } })
        if (existProfile) {
            throw new Error('Profile already exist')
        }
        await tbProfile.create(data)
        AddLog.CreateLog(data.profile, 'Adicionado', 'Adicionado Perfil', req)
        res.status(201).json({ successMessage: 'Add successfully' })

    }

    static async selectAll(res) {
        const result = (await tbProfile.findAll()).map(
            profile => profile.dataValues
        )
        res.status(200).json(result)
    }

    static async select(req, res) {
        await tbProfile.findByPk(req).then(
            values => res.status(200).json(values.dataValues)
        )
    }

    async update(req, data, res) {
        const existProfileUser = await tbUser.findOne({ where: { idProfile: req.params.id } })
        const existProfile = await tbProfile.findAll({ where: { profile: data.profile } })

        if(req.params.id == 1 && data.profile != 'Administrador'  || req.params.id == 2 && data.profile != 'Usuario') {
            throw new Error('This profile not can altered name')
        }

        if (existProfileUser) {
            throw new Error('Exist user registered in this profile')
        }

        if (existProfile.find(value => value.dataValues.idProfile != req.params.id)) {
            throw new Error('Exist already profile registered:' + ' (' + (existProfile.filter(value => value.dataValues.idProfile != req.params.id)
                .map(value => value.dataValues.profile).join(', ').concat(') ')))
        }

        const alterProfile = await tbProfile.findByPk(req.params.id)

        alterProfile.idProfile = data.idProfile
        alterProfile.profile = data.profile

        await alterProfile.save()
        AddLog.CreateLog(data.profile, 'Atualizado', 'Atualizado Perfil', req)


        res.status(200).json({ successMessage: 'Updated successfully' })
    }

    static async delete(req, res) {
        const removerProfile = await tbProfile.findByPk(req.params.id)
        const countProfileInUser = await tbUser.count({where: {idProfile: req.params.id}})
        
        if(req.params.id == 1 || req.params.id == 2) {
            throw new Error('This profile not can removed')
        }

        if(countProfileInUser) {
            throw new Error('You cannot delete a Profile, as it is registered in the User table')
        }

        removerProfile.destroy()
        AddLog.CreateLog(removerProfile.dataValues.profile, 'Deletado', 'Deletado Perfil', req)
        res.status(200).json({ successMessage: 'Delete profile' })
    }

}

module.exports = Profile;