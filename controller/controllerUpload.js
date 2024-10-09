const storage = require('../content/storageFile/storage')

const uploadFile = (req, res) => {
    try {
        res.status(200).json({ success: "file upload successful" })
    } catch (error) {
        res.status(200).json({message: error.message })
    }
  
}

const deleteFile = (req, res) => {
    try {
        storage.deleteFiles(res)
    } catch (error) {
        res.status(200).json({message: error.message })
    }
}
module.exports = {uploadFile, deleteFile}