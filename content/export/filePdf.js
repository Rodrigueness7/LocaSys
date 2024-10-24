const fs = require('fs')
const PDFDocument = require('pdfkit-table')
const doc = new PDFDocument({margin: 30, size: 'A4'})


const filePdf = (data, req) => {
    doc.pipe(fs.createWriteStream(req))

    const headers = [
        {label: 'IdEquipment', property: 'idEquipment', width: 80},
        {label: 'codProd', property: 'codProd', width: 80},
        {label: 'equipment', property: 'equipment', width: 80},
        {label: 'type', property: 'type', width: 80},
        {label: 'value', property: 'value', width: 80},
        {label: 'entryDate', property: 'entryDate', width: 80},
        {label: 'deletionDate', property: 'deletionDate', width: 80}  
    ]

    const datas = data.map((item) => ({
        idEquipment: item.idEquipment,
        codProd: item.codProd,
        equipment: item.equipment,
        type: item.type,
        value: item.value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}),
        entryDate: new Date(item.entryDate).toISOString().slice(0, 10).split('-').reverse().join('/'),
        deletionDate: item.deletionDate ? new Date(item.deletionDate).toISOString().slice(0, 10).split('-').reverse().join('/') : ''
    }))

    const tableJson = {
        headers: headers,
        datas: datas,
        options: {
            width: 800
        }
    }

    doc.fontSize(16).text('Lista de Equipamentos', {align: 'center'})
    doc.moveDown()
    doc.table(tableJson)
    doc.end()
}

module.exports = {filePdf}