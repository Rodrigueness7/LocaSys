const Profile = require('../model/Profile')

const add = async (req, res) => {
    try {
        const profile = new Profile(req.body)
        await profile.insert(profile, res, req)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const findAll = async (req, res) => {
    try {
        await Profile.selectAll(res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const find = async (req, res) => {
    try {
        await Profile.select(req.params.id, res, req)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const update = async (req, res) => {
    try {
        const profile = new Profile(req.body)
        await profile.update(req, profile, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
} 

const remover = async (req, res) => {
    try {
       await Profile.delete(req, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}


module.exports = {add, findAll, find, update, remover}