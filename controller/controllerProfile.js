const Profile = require('../model/profile')

const addProfile = async (req, res) => {
    const profile = new Profile(req.body)
   await profile.insertProfile(profile, res)
}

const findAllProfile = async (req, res) => {
    try {
        await Profile.findAllProfile(res)
    } catch (error) {
        res.send(error.message)
    }
}

const findProfile = async (req, res) => {
    try {
        await Profile.findProfileById(req.params.id, res)
    } catch (error) {
        res.send(error.message)
    }
}

const updateProfile = async (req, res) => {
    try {
        const profile = new Profile(req.body)
        await profile.updateProfile(req.params.id, profile)
        res.send('Profile update')
    } catch (error) {
        res.send(error.message)
    }
} 

const deleteProfile = async (req, res) => {
    try {
       await Profile.deleteProfile(req.params.id, res)
        res.send('Profile delete')
    } catch (error) {
        res.send(error.message)
    }
}


module.exports = {addProfile, findAllProfile, findProfile, updateProfile, deleteProfile}