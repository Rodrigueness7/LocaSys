const { Op } = require('sequelize')
const tbLog = require('../constant/tbLog')
const tbUser = require('../constant/tbUser')
const locaTime = require('../constant/localTime')


class Log {
    idLog
    action
    description
    actionDate
    idUser

    constructor(data) {
        this._idLog = data.idLog
        this._action = data.action
        this._description = data.description
        this._actionDate = new Date()
        this._idUser = data.idUser
    }

    get _idLog() {
        return this.idLog
    }

    set _idLog(value) {
        if(value == undefined) {
            throw new Error('Invalid idLog')
        }
        return this.idLog = value
    }

    get _action() {
        return this.action
    }

    set _action(value) {
        if(value == undefined) {
            throw new Error('Invalid action')
        }
        return this.action = value
    }

    get _description() {
        return this.description
    }

    set _description(value) {
        if(value == undefined) {
            throw new Error('Invalid description')
        }
        return this.description = value
    }

    get _actionDate() {
        return this.actionDate
    }

    set _actionDate(value) {
        if(value == undefined ) {
            throw new Error('Invalid actionDate')
        }
        
        return this.actionDate = locaTime.dateLocalTime()
    }

    get _idUser() {
        return this.idUser
    }

    set _idUser(value) {
        if(value == undefined) {
            throw new Error('Invalid idUser')
        }
        return this.idUser = value
    }

    async insertLog(data) {
        await tbLog.create(data)
        
    }

    static async selectAllLog(res) {
        const result = (await tbLog.findAll({attributes: ['idLog','action','description','actionDate'], 
            include:{model: tbUser, attributes: ['username']}})).map(
                data => data.dataValues
            )
            res.json(result)
    }

    static async selectLog(dateInit, dateFinish, action, res) {
       const dtInitCov = locaTime.initConv(dateInit)
       const dtFinishCov = locaTime.finishConv(dateFinish)
       const valueAction = action ? action : '%'

       const result = (await tbLog.findAll({where:{action: {[Op.like]: valueAction} ,actionDate: {[Op.gte]: dtInitCov, [Op.lte]: dtFinishCov}}, attributes: ['idLog', 'action','description','actionDate'], include: {model: tbUser, attributes: ['username']}}
       )).map(
            values => values.dataValues
       )
      res.json(result)
    }    
}

module.exports = Log