const Sector = require('../model/Sector')

const addSector = async (req, res) => {
  try {
    const sector = new Sector(req.body)
    await sector.insertSector(sector, res)
  } catch (error) {
    res.json({message: error.message})
  }
}

const findAllSector = async (req, res) => {
    try {
        await Sector.findAllSector(res)
    } catch (error) {
       res.json({message: error.message})
    }
}

const findSectorById = async (req, res) => {
    try {
       await Sector.findSector(req.params.id, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const updateSector = async (req, res) => {
    try {
        const sector = new Sector(req.body)
        await sector.updateSector(req.params.id, sector, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const inactivateSector = async (req, res) => {
    try {
       await Sector.inactivateSector(req.params.id, req.body.deletionDate, res)
    } catch (error) {
        res.json({message: error.message})
    }
} 

module.exports = {addSector, findAllSector, findSectorById, updateSector, inactivateSector}