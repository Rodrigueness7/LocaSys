const uploadFile = (req, res) => {
    try {
        res.status(200).json({ success: "file upload successful" })
    } catch (error) {
        res.status(200).json({ success: "file upload successful" })
    }
  
}

module.exports = {uploadFile}