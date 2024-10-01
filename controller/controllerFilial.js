const Filial = require('../model/Filial')

const addFilial = async (req, res) => {
   try {
      const filial = new Filial(req.body)
      await filial.insertFilial(filial, res)
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
      await filial.updateFilial(req.params.id, filial, res) 
   } catch (error) {
      res.json({message: error.message})
   }
} 

const removerFilial = async (req, res) => {
   try {
     await Filial.deleteFilial(req.params.id, res)
   } catch (error) {
      res.json({message: error.message})
   }
}

module.exports = {addFilial, findAllFilial, updateFilial, removerFilial, findFilial}