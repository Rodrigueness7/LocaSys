const Filial = require('../model/filial')

const addFilial = async (req, res) => {
    const filial = new Filial(req.body)
    await filial.insertFilial(filial, res)
  
}

const findAllFilial = async (req, res) => {
   try {
     await Filial.findAllFilial(res)
   } catch (error) {
      res.send(error.message)
   }
} 

const findFilial = async (req, res) => {
   try {
      Filial.findFilial(req.params.id, res)
   } catch (error) {
      res.send(error.message)
   }
}

const updateFilial = async (req, res) => {
   try {
      const filial = new Filial(req.body)
      filial.updateFilial(req.params.id, filial)
      await res.send('Update')
   } catch (error) {
      res.send(error.message)
   }
} 

const removerFilial = async (req, res) => {
   try {
     await Filial.deleteFilial(req.params.id)
     res.send('Removed filial')
   } catch (error) {
      res.send(error.message)
   }
}

module.exports = {addFilial, findAllFilial, updateFilial, removerFilial, findFilial}