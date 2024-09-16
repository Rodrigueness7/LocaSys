const { Op } = require('sequelize')
const tbLog = require('../constant/tbLog')
const tbUser = require('../constant/tbUser')


class Log {
    idLog
    action
    actionDate
    idUser

    constructor(data) {
        this._idLog = data.idLog
        this._action = data.action
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

    get _actionDate() {
        return this.actionDate
    }

    set _actionDate(value) {
        if(value == undefined ) {
            throw new Error('Invalid actionDate')
        }
        //CONVERTE TIMEZONE PARA BRASIL
        var tzoffset = (new Date()).getTimezoneOffset() * 60000;
        var localISOTime = (new Date(Date.now() - tzoffset)).toISOString()

        return this.actionDate = localISOTime
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

    async insertLog(data, res) {
        await tbLog.create(data)
        res.json({message: 'Add successfully'})
    }

    static async findAllLog(res) {
        const result = (await tbLog.findAll({attributes: ['action', 'actionDate'], 
            include:{model: tbUser, attributes: ['username']}})).map(
                data => data.dataValues
            )
            res.json(result)
    }

    static async findLogsByDate(dateInit, dateFinish, res) {
        const dtInit = new Date(dateInit.split('/').reverse().join('-'))
        const dtFinish = new Date(dateFinish.split('/').reverse().join('-')).toISOString().split('T')[0] + 'T23:59:00.000Z'

        const result = (await tbLog.findAll({attributes: ['action', 'actionDate'],
            include:{model:tbUser, attributes:['username']}, where:{actionDate: {
               [Op.gte]: dtInit, [Op.lte]: dtFinish}}})).map(
             value => value.dataValues
        )
       
        res.json(result)
    }

    static async findLogsByAction(data, res) {
        const result = (await tbLog.findAll({attributes: ['action', 'actionDare'],
            include: {model:tbUser, attributes: ['username']}, where: {action: data.action}
        })).map(
            value => value.dataValues
        )
        res.json(result)
    }
    
}

module.exports = Log