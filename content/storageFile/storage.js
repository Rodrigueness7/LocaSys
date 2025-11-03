const fs = require('fs').promises
const multer = require('multer')

const deleteFile = async (res) => {
    const file = []
    const dados = await fs.readdir('./uploads')
    dados.map(values => {
        file.push(values)
    })
    file.map(files =>
        fs.unlink(`./uploads/${files}`)
    )
    if (file.length == 0) {
        return res.json({ message: 'There is no file' })
    }
    res.json({ message: 'files was deleted successfully' })
}


const uploadFiles = () => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            fs.access('./uploads').catch(async () => {
                await fs.mkdir('./uploads')
            })
            setTimeout(() => {
                cb(null, './uploads')
            }, 1000)
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, uniqueSuffix + file.originalname)
        }
    })
    return multer({ storage: storage })
}



module.exports = { uploadFiles, deleteFile }