const xlsx = require('../content/readFile/xlsx')

const readFile = async (req, res) => {
    try {
        await xlsx.readXlsx(res)
    } catch (error) {
        res.json({ message: error.message })
    }
}

module.exports = { readFile }