const Profile_permission = require('../model/Profile_permission')

const addProfile_permission = async (req, res) => {
    try {
        const profile_permission = new Profile_permission(req.body)
        await profile_permission.insertProfile_permission(profile_permission, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAllProfile_permission = async (req, res) => {
    try {
        await Profile_permission.selectAllProfile_permission(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const updateProfile_permission = async (req, res) => {
    try {
        const profile_permission = new Profile_permission(req.body)
        await profile_permission.updateProfile_permission(req.params.id, profile_permission, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const removerProfile_permission = async (req, res) => {
    try {
       await Profile_permission.deleteProfile_permission(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {addProfile_permission, findAllProfile_permission, updateProfile_permission, removerProfile_permission}