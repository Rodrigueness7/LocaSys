const fs = require('fs').promises
const xlsx = require('xlsx')
const { changeKeyObejct } = require('../../constant/changeKeyObejct')
const EquipmentRental = require('../../model/EquipmentRental')

const readXlsx = async (cell1, cell2) => {
    let file = []
    const dados = await fs.readdir('./uploads')
    dados.map(values => {
        file.push(values)
    })
    const workbook = xlsx.readFile(`./uploads/${file[0]}`)
    const sheetName = workbook.SheetNames[0]
    const sheet = workbook.Sheets[sheetName]
    const jsonData = xlsx.utils.sheet_to_json(sheet, {range: `${cell1}:${cell2}`})

    jsonData.map(async data => {
        changeKeyObejct(data, 'codProd', ['Nº K&M'])
        changeKeyObejct(data, 'proposal', ['Proposta'])
        changeKeyObejct(data, 'description', ['Descrição'])
        changeKeyObejct(data, 'init', ['Início'])
        changeKeyObejct(data, 'finish', ['Fim'])
        changeKeyObejct(data, 'entry', ['Entrada'])
        changeKeyObejct(data, 'output', ['Saída'])
        changeKeyObejct(data, 'value', ['Valor'])
        
        const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
        data.init = !regex.test(data.init) ? null : data.init
        data.finish = !regex.test(data.finish) ? null : data.finish
        data.entry = !regex.test(data.entry) ? null : data.entry
        data.output = !regex.test(data.output) ? null : data.output

        const equipmentRental = new EquipmentRental(data)
        await equipmentRental.insertEquipmentRental(equipmentRental)
       
    })
     
}

module.exports = { readXlsx }