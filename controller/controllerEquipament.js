const Equipament = require('../model/equipament')

const addEquipament = async (req, res) => {
    try {
        const equipament = new Equipament(req.body)
        equipament.insertEquipament(equipament, res)
    } catch (error) {
        res.json({message: error.message})
    }
}


module.exports = {addEquipament}