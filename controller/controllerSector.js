const Sector = require('../model/sector')

const addSector = async (req, res) => {
    const sector = new Sector(req.body)
    sector.insertSector(sector, res)
}

const findAllSector = async (req, res) => {
    try {
         await Sector.findAllSector(res)
    } catch (error) {
        res.send(error.message)
    }
}

module.exports = {addSector, findAllSector}