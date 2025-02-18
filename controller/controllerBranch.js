const Branch = require('../model/Branch')

const add = async (req, res) => {
   try {
      const branch = new Branch(req.body)
      await branch.insert(branch, res, req)
   } catch (error) {
      res.json({message: error.message})
   }
  
}

const findAll = async (req, res) => {
   try {
     await Branch.selectAll(res)
   } catch (error) {
      res.json({message: error.message})
   }
} 

const findId = async (req, res) => {
   try {
      await Branch.selectId(req.params.id, res)
   } catch (error) {
      res.json({message: error.message})
   }
}

const update = async (req, res) => {
   try {
      const branch = new Branch(req.body)
      await branch.update(req, branch, res) 
   } catch (error) {
      res.json({message: error.message})
   }
} 

const inactivate = async (req, res) => {
   try {
     await Branch.inactivate(req, req.body.deletionDate, res)
   } catch (error) {
      res.json({message: error.message})
   }
}


module.exports = {add, findAll, update, inactivate, findId}