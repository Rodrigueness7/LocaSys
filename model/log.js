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
        let tzoffset = (new Date()).getTimezoneOffset() * 60000;
        let localISOTime = (new Date(Date.now() - tzoffset)).toISOString()

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

    static async findLog(dateInit, dateFinish, action, res) {
       const dtInitCov = dateInit ? new Date(dateInit.split('/').reverse().join('-')) : '2001-01-01T00:00:00.000Z'
       const dtFinishCov = dateFinish ? new Date(dateFinish.split('/').reverse().join('-')).toISOString().split('T')[0] + 'T23:59:59.000Z': new Date().toISOString().split('T')[0] + 'T23:59:59.000Z'
       const valueAction = action ? action : '%'

       const result = (await tbLog.findAll({where:{action: {[Op.like]: valueAction} ,actionDate: {[Op.gte]: dtInitCov, [Op.lte]: dtFinishCov}}})).map(
            values => values.dataValues
       )
      res.json(result)
    }    
}

module.exports = Log