const xlsx = require('../content/readFile/xlsx')
const EquipmentRental = require('../model/EquipmentRental')
const storage = require('../content/storageFile/storage')
const addLog = require('../constant/addLog');
const tbBranch = require('../constant/tbBranch');

const addFile = async (req, res) => {
  try {
    const items = await xlsx.readXlsx(req.body);

    await Promise.all(items.map(async item => {
      const equipmentRental = new EquipmentRental(item);
      await equipmentRental.insert(equipmentRental);
    }));

    const branch = await tbBranch.findOne({where: {idBranch: req.body.idBranch}})
    const initPeriod = new Date(items.find(item => item).initPeriod).toLocaleDateString('pt-br', {timeZone: 'UTC'})
    const finishPeriod = new Date(items.find(item => item).finishPeriod).toLocaleDateString('pt-br', {timeZone: 'UTC'})
    
    addLog.CreateLog(branch.dataValues.branch, 'Adicionado', `Importado a tabela do período: ${initPeriod} à ${finishPeriod} da`, req)
    storage.deleteFile();
    res.status(200).json({ successMessage: 'Add successfully' });

  } catch (error) {
    storage.deleteFile();
    res.status(400).json({ errorMessage: error.message });
  }
};

const findAll = async (req, res) => {
    try {
        await EquipmentRental.selectAll(res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const find = async (req, res) => {
    try {
        await EquipmentRental.select(req.body, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const findId = async (req, res) => {
    try {
        await EquipmentRental.selectId(req.params.idEquipmentRental, res)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}

const removerAll = async (req, res) => {
    try {
        await EquipmentRental.delete(res, req.body)
    } catch (error) {
        res.status(400).json({ errorMessage: error.message })
    }
}



module.exports = { addFile, findAll, find, findId, removerAll }