const XLSX = require('xlsx')


const fileXlsx = (data, req) => {
    const workSheet = XLSX.utils.json_to_sheet(data)
    const workBook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(workBook, workSheet, 'Sheet 1')
    XLSX.writeFile(workBook, req)
}

module.exports = {fileXlsx}