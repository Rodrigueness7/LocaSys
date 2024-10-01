const Profile = require('../model/Profile')

const addProfile = async (req, res) => {
    try {
        const profile = new Profile(req.body)
        await profile.insertProfile(profile, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAllProfile = async (req, res) => {
    try {
        await Profile.selectAllProfile(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findProfile = async (req, res) => {
    try {
        await Profile.selectProfile(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const updateProfile = async (req, res) => {
    try {
        const profile = new Profile(req.body)
        await profile.updateProfile(req.params.id, profile, res)
    } catch (error) {
        res.json({message: error.message})
    }
} 

const deleteProfile = async (req, res) => {
    try {
       await Profile.deleteProfile(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}


module.exports = {addProfile, findAllProfile, findProfile, updateProfile, deleteProfile}