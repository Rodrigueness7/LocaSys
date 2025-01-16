const Filial = require('../model/Filial')

const add = async (req, res) => {
   try {
      const filial = new Filial(req.body)
      await filial.insert(filial, res, req)
   } catch (error) {
      res.json({message: error.message})
   }
  
}

const findAll = async (req, res) => {
   try {
     await Filial.selectAll(res)
   } catch (error) {
      res.json({message: error.message})
   }
} 

const findId = async (req, res) => {
   try {
      await Filial.selectId(req.params.id, res)
   } catch (error) {
      res.json({message: error.message})
   }
}

const update = async (req, res) => {
   try {
      const filial = new Filial(req.body)
      await filial.update(req, filial, res) 
   } catch (error) {
      res.json({message: error.message})
   }
} 

const inactivate = async (req, res) => {
   try {
     await Filial.inactivate(req, req.body.deletionDate, res)
   } catch (error) {
      res.json({message: error.message})
   }
}


module.exports = {add, findAll, update, inactivate, findId}