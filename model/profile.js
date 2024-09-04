const tbProfile = require('../constant/tbProfile')

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
        if (value == undefined) {
            throw new Error('Invalid profile')
        }
        return this.profile = value
    }

    async insertProfile(data, res) {
        const existProfile = await tbProfile.findOne({ where: { profile: data.profile } })
        try {
            if (existProfile) {
                throw new Error('Profile already exist')
            }
            await tbProfile.create(data)
            res.send('Add successfully')
        } catch (error) {
            res.send(error.message)
        }
    }

    static async findAllProfile(res) {
        const result = (await tbProfile.findAll()).map(
            profile => profile.dataValues
        )
        res.send(result)
    }

    static async findProfileById(req, res) {
        await tbProfile.findByPk(req).then(
            values => res.send(values.dataValues)
        )
    }

    async updateProfile(req, data) {
        const profileById = await tbProfile.findByPk(req)

        profileById.idProfile = data.idProfile
        profileById.profile = data.profile

        await profileById.save()
    }

    static async deleteProfile(req, res) {
        const profileById = await tbProfile.findByPk(req).then(
            data => {
                return data.destroy()
            }
        )
        return profileById
    }

}

module.exports = Profile;