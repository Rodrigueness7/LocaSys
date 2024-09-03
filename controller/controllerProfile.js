const Profile = require('../model/profile')

const addProfile = (req, res) => {
    const profile = new Profile(req.body)
    profile.insertProfile(profile, res)
}

module.exports = {addProfile}