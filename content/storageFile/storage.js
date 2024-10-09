const fs = require('fs')
const multer = require('multer')

const upload = () => {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, 'uploads/')
        }, 
        filename: function(req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, uniqueSuffix+file.originalname)
        }
    })
    return multer({storage: storage})
}

const deleteFiles = (res) => {
   const file = []
   fs.readdir('./uploads', (error, files) => {
    if(error) {
        throw new Error('there was an error listing the files')
    }
    files.map(values => {
        file.push(values)
    })
  
    fs.unlink(`./uploads/${file[0]}`,(error) => {
        if(error) {
            throw new Error('Unable to delete file')
        }
        res.json({message:'File was delete successfully'})
    })
   })
}



module.exports = {upload, deleteFiles}