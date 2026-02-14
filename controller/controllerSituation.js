const Situation = require('../model/Situation')

const findAll = async (req, res) => {
    try {
        await Situation.select(res)
    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }
}

const findById = async (req, res) => {
    try {
        const id = req.params.id    
        await Situation.find(id, res)
    } catch (error) {
        res.status(500).json({ errorMessage: error.message })
    }   
}

module.exports = {findAll, findById}