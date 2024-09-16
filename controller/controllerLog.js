const Log = require('../model/log')

const addLog = async (req, res) => {
    try {
        const log = new Log(req.body)
        await log.insertLog(log, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findAllLog = async (req, res) => {
    try {
        await Log.findAllLog(res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findLogDate = async (req, res) => {
    try {
        await Log.findLogsByDate(req.body.dateInit, req.body.dateFinish, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

const findLogAction = async (req, res) => {
    try {
        await Log.findLogsByAction(req.body.action, res)
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = {addLog, findAllLog, findLogDate, findLogAction}