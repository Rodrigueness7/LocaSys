const fs = require('fs').promises
const xlsx = require('xlsx')


const readXlsx = async (res) => {
    file = []
    const dados = await fs.readdir('./uploads')
    dados.map(values => {
        file.push(values)
    })
    const workbook = xlsx.readFile(`./uploads/${file[0]}`)
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const jsonData = xlsx.utils.sheet_to_json(sheet)

    res.json(jsonData)
}

module.exports = { readXlsx }