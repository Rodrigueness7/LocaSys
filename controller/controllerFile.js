const xlsx = require('../content/readFile/xlsx')

const readFile = async (req, res) => {
    try {
        await xlsx.readXlsx(res, req.body.cell1, req.body.cell2)
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = {readFile}