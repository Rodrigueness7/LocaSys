const Log = require('../model/Log')

const findAllLog = async (req, res) => {
    try {
        await Log.selectAllLog(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findLog = async (req, res) => {
    try {
        await Log.selectLog(req.body.dateInit, req.body.dateFinish, req.body.action, res)
    } catch (error) {
        res.json({message: error.message})
    }
}



module.exports = {findAllLog, findLog}