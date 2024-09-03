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

const findSectorById = async (req, res) => {
    try {
       await Sector.findSector(req.params.id, res)
    } catch (error) {
        res.send(error.message)
    }
}

const updateSector = async (req, res) => {
    try {
        const sector = new Sector(req.body)
        await sector.updateSector(req.params.id, sector)
        res.send('Sector update')
    } catch (error) {
        res.send(error.message)
    }
}

const removerSector = (req, res) => {
    try {
        Sector.deleteSector(req.params.id)
        res.send('Delete Sector')
    } catch (error) {
        res.send(error.message)
    }
} 

module.exports = {addSector, findAllSector, findSectorById, updateSector, removerSector}