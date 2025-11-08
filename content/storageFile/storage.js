const fs = require('fs').promises
const multer = require('multer')

const deleteFile = () => {
       fs.readdir('./uploads').then(files => {
            files.map(file =>
            fs.unlink(`./uploads/${file}`)
            )
    })
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