const Users_sectors = require('../model/users_sectors');
const users_sectors = require('../model/users_sectors');

const add = async (req, res) => {
    try {
        const user_sector = new users_sectors(req.body);
        await user_sector.insert(user_sector);
        res.status(201).json({ successMessage: 'Add successfuly' });
    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
    }   

}

const findAll = async (req, res) => {
    try {
        await users_sectors.selectAll(res);
    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
    }
}

const findId = async (req, res) => {
    try {
        await users_sectors.selectId(req.params.id, res);
    } catch (error) {
        res.status(400).json({ errorMessage: error.message });
    }
}

const update = async (req, res) => {
    try {
        const user_sector = new users_sectors(req.body);
        await user_sector.update(user_sector);
        res.status(200).json({ successMessage: 'Updated successfully' });
    } catch (error) {
        res.json({ errorMessage: error.message });
    }
}

const remover = async(req, res) => {
    try {
    await Users_sectors.delete(req.params.id, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

module.exports = {add, findAll, findId, update, remover};