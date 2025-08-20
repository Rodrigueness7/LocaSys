const Profile_permission = require('../model/Profile_permission')

const add = async (req, res) => {
    try {
        await Promise.all(req.body.map(async values => {
            const profile_permission = new Profile_permission(values)
            await profile_permission.insert(profile_permission, values.profile)
        }))
        res.status(201).json({ successMessage: 'Add successfuly' })
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const findAll = async (req, res) => {
    try {
        await Profile_permission.selectAll(res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const findId = async (req, res) => {
    try {
        await Profile_permission.selectId(req.params.id, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const findSectionIdProfile = async (req, res) => {
    try {
        await Profile_permission.selectPermissionIdProfile(req.params.id, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const update = async (req, res) => {
    try {
        await Promise.all(req.body.map(async (values) => {
            const profile_permission = new Profile_permission(values);

            await profile_permission.update(values);
        }));

        res.status(200).json({ successMessage: 'Updated successfully' });
    } catch (error) {
        res.json({ errorMessage: error.message });
    }
}


const remover = async (req, res) => {
    try {
        await Profile_permission.delete(req, res)
    } catch (error) {
        res.status(200).json({ errorMessage: error.message })
    }
}

module.exports = { add, findId, findSectionIdProfile, findAll, update, remover }