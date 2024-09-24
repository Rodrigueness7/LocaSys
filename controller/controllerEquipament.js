const Equipament = require('../model/equipament')

const addEquipament = async (req, res) => {
    try {
        const equipament = new Equipament(req.body)
        await equipament.insertEquipament(equipament, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAllEquipament = async (req, res) => {
    try {
       await Equipament.selectAllEquipament(res)
    } catch (error) {
        res,json({message: error.message})
    }
}

const findEquipament = async (req, res) => {
    try {
        await Equipament.selectEquipament(req.body, res)
    } catch (error) {
        res.json({message: error.message})
    }
}


module.exports = {addEquipament, findAllEquipament, findEquipament}