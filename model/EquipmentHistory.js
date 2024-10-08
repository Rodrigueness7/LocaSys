const tbEquipmentHistory = require('../constant/tbEquipmentHistory')
const localTime = require('../constant/localTime')
const tbEquipment = require('../constant/tbEquipment')
const { Op } = require('sequelize')

class EquipmentHistory {
    idEquipmentHistory
    idEquipment
    reason
    entryDate
    returnDate

    constructor(data) {
        this._idEquipmentHistory = data.idEquipmentHistory
        this._idEquipment = data.idEquipment
        this._reason = data.reason
        this._entryDate = data.entryDate
        this._returnDate = data.returnDate
    }

    get _idEquipmentHistory() {
        return this.idEquipmentHistory
    }

    set _idEquipmentHistory(value) {
        if(value == undefined) {
            return this.idEquipmentHistory = 0 
        }
        return this.idEquipmentHistory = value
    }

    get _idEquipment() {
        return this.idEquipment
    }

    set _idEquipment(value) {
        if(value == undefined) {
            throw new Error('Invalid idEquipment')
        }
        return this.idEquipment = value
    }

    get _reason() {
        return this.reason
    }

    set _reason(value) {
        if(value == undefined) {
           return this.reason = null
        }
        return this.reason = value
    }

    get _entryDate() {
        return this.entryDate
    }

    set _entryDate(value) {
        if(value == undefined) {
            return this.entryDate = null
        }
        return this.entryDate = value
    }

    get _returnDate() {
        return this.entryDate
    }

    set _returnDate(value) {
        if(value == undefined) {
            return this.returnDate = null
        }
        return this.returnDate = value
    }

    async insertEquipmentHistory(data, res) {
       await tbEquipmentHistory.create(data)
       res.json({message: 'Add successfully'})
    }

    static async selectAllEquipmentHistory(res) {
        const result = (await tbEquipmentHistory.findAll({attributes:['idEquipmentHistory', 'reason', 'entryDate', 'returnDate'], 
            include: {model: tbEquipment, attributes: ['idEquipment','codProd', 'equipment', 'type']}})).map(
            values => values.dataValues
        )
        res.json(result)
    }

    static async selectEquipmentHistory(data, res) {
        let codProd = data.codProd ? data.codProd : '%'
        let entryDateInit = localTime.initConv(data.entryDateInit)
        let entryDateFinish = localTime.finishConv(data.entryDateFinish)
       
        let conditions = (dtInit, dtFinish) => {
            if(dtInit || dtFinish ) {
                return {returnDate:{[Op.gte]: new Date(dtInit.split('/').reverse().join('-')).toISOString()}, returnDate: {[Op.lte]: new Date(dtFinish.split('/').reverse().join('-')).toISOString().split('T')[0] + 'T23:59:59.000Z'}}
            } else {
                return [{returnDate: {[Op.ne]: null}}, {returnDate:{[Op.is]: null}}]
            }
        }

        const result = (await tbEquipmentHistory.findAll({where:{entryDate: {[Op.gte]: entryDateInit, [Op.lte]: entryDateFinish},
            [Op.or]: conditions(data.returnDateInit, data.returnDateFinish)},
            attributes: ['idEquipmentHistory', 'reason', 'entryDate', 'returnDate'],
            include: {model: tbEquipment, attributes: ['idEquipment', 'codProd'], where: {codProd: {[Op.like]: codProd}}}
        })).map(values => values.dataValues)
        res.json(result)
        
        }

        async UpdateEquipamentHistory(data, req, res) {
            const pkEquipmentHistory = await tbEquipmentHistory.findByPk(req)

            pkEquipmentHistory.idEquipmentHistory = data.idEquipmentHistory
            pkEquipmentHistory.idEquipment = data.idEquipment
            pkEquipmentHistory.reason = data.reason
            pkEquipmentHistory.entryDate = data.entryDate
            pkEquipmentHistory.returnDate = data.returnDate

            await pkEquipmentHistory.save()
            res.json({message: 'Updated successfully'})

        }

    
}

module.exports = EquipmentHistory