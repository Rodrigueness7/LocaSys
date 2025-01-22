const Profile_permission = require('../model/Profile_permission')

const add = async (req, res) => {
    try {
        const profile_permission = new Profile_permission(req.body)
        await profile_permission.insert(profile_permission, req.body, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAll = async (req, res) => {
    try {
        await Profile_permission.selectAll(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findId = async (req, res) => {
    try {
        await Profile_permission.selectId(req.params.idProfile_permission, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const profile_permission = new Profile_permission(req.body)
        await profile_permission.update(req.params.id, profile_permission, res)
    } catch (error) {
        res.json({message: error.message})
    }
}


const remover = async (req, res) => {
    try {
       await Profile_permission.delete(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {add, findId, findAll, update, remover}