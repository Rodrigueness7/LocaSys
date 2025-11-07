const xlsx = require('../content/readFile/xlsx')
const EquipmentRental = require('../model/EquipmentRental')
const storage = require('../content/storageFile/storage')

const addFile = async (req, res) => {
  try {
    const items = await xlsx.readXlsx(req.body);

    await Promise.all(items.map(async item => {
      const equipmentRental = new EquipmentRental(item);
      await equipmentRental.insert(equipmentRental);
    }));

    storage.deleteFile();
    res.status(200).json({ successMessage: 'Added successfully' });

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