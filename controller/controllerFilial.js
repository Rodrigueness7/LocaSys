const Filial = require('../model/Filial')

const addFilial = async (req, res) => {
   try {
      const filial = new Filial(req.body)
      await filial.insertFilial(filial, res, req)
   } catch (error) {
      res.json({message: error.message})
   }
  
}

const findAllFilial = async (req, res) => {
   try {
     await Filial.selectAllFilial(res)
   } catch (error) {
      res.json({message: error.message})
   }
} 

const findFilial = async (req, res) => {
   try {
      await Filial.selectFilial(req.params.id, res)
   } catch (error) {
      res.json({message: error.message})
   }
}

const updateFilial = async (req, res) => {
   try {
      const filial = new Filial(req.body)
      await filial.updateFilial(req, filial, res) 
   } catch (error) {
      res.json({message: error.message})
   }
} 

const inactivateFilial = async (req, res) => {
   try {
     await Filial.inactivateFilial(req, req.body.deletionDate, res)
   } catch (error) {
      res.json({message: error.message})
   }
}


module.exports = {addFilial, findAllFilial, updateFilial, inactivateFilial, findFilial}