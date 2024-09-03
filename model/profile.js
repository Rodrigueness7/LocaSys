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
        if(value == undefined) {
            return this.idProfile = 0
        }
        return this.idProfile = value
    }

    get _profile() {
        return this.profile
    }

    set _profile(value) {
        if(value == undefined) {
            throw new Error('Invalid profile')
        }
        return this.profile = value
    }

    async insertProfile(data, res) {
        const existProfile = await tbProfile.findOne({where: {profile: data.profile}})
        try {
            if(existProfile) {
                throw new Error('Profile already exist')
            }
            await tbProfile.create(data)
            res.send('Add successfully')
        } catch (error) {
            res.send(error.message)
        }
    }
}

module.exports = Profile;