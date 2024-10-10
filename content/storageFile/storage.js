const fs = require('fs').promises
const multer = require('multer')

const upload = () => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, uniqueSuffix + file.originalname)
        }
    })
    return multer({ storage: storage })
}


const deleteFiles = async (res) => {
    const file = []
    const dados = await fs.readdir('./uploads')
    dados.map(values => {
        file.push(values)
    })

    if (file.length == 0) {
        return res.json({ message: 'There is no file' })
    }
    await fs.unlink(`./uploads/${file[0]}`)
    res.json({ message: 'file was deleted successfully' })
}



module.exports = { upload, deleteFiles }