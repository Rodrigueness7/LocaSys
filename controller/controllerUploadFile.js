const storage = require('../content/storageFile/storage')

const uploadFile = (req, res) => {
    try {
        res.status(200).json({successMessage: "file upload successful" })
    } catch (error) {
        res.status(200).json({errorMessage: error.message })
    }
  
}

const deleteFile = (req, res) => {
    try {
        storage.deleteFile(res)
    } catch (error) {
        res.status(200).json({errorMessage: error.message })
    }
}
module.exports = {uploadFile, deleteFile}