const Sector = require('../model/Sector')

const add = async (req, res) => {
  try {
    const sector = new Sector(req.body)
    await sector.insert(sector, req.body.uniqueIdentifier,res, req)
  } catch (error) {
    res.json({errorMessage: error.message})
  }
}

const findAll = async (req, res) => {
    try {
        await Sector.findAll(res)
    } catch (error) {
       res.json({errorMessage: error.message})
    }
}

const findId = async (req, res) => {
    try {
       await Sector.find(req.params.id, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const update = async (req, res) => {
    try {
        const sector = new Sector(req.body)
        await sector.update(req, sector, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
}

const inactivate = async (req, res) => {
    try {
       await Sector.inactivate(req, req.body.deletionDate, res)
    } catch (error) {
        res.json({errorMessage: error.message})
    }
} 

module.exports = {add, findAll, findId, update, inactivate}