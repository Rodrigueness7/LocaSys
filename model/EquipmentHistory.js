const tbEquipmentHistory = require('../constant/tbEquipmentHistory')
const tbEquipment = require('../constant/tbEquipment')
const condition = require('../constant/conditionDate')
const { Op } = require('sequelize')
const AddLog = require('../constant/addLog')


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
        return this.entryDate = new Date(value.split('/').reverse().join('-')).toISOString()
    }

    get _returnDate() {
        return this.entryDate
    }

    set _returnDate(value) {
        if(value == undefined) {
            return this.returnDate = null
        }
        return this.returnDate = new Date(value.split('/').reverse().join('-')).toISOString()
    }

    async insert(data, res) {
       await tbEquipmentHistory.create(data)
       res.json({message: 'Add successfully'})
    }

    static async selectAll(res) {
        const result = (await tbEquipmentHistory.findAll({attributes:['idEquipmentHistory', 'reason', 'entryDate', 'returnDate'], 
            include: {model: tbEquipment, attributes: ['idEquipment','codProd', 'equipment', 'type']}})).map(
            values => values.dataValues
        )
        res.json(result)
    }

    static async selectId(req, res) {
        await tbEquipmentHistory.findByPk(req, {attributes:['idEquipmentHistory', 'reason', 'entryDate', 'returnDate'],
            include: {model: tbEquipment, attributes: ['idEquipment','codProd', 'equipment', 'type']}
        }).then(
            idEquipmentHistory => res.json(idEquipmentHistory.dataValues)
        )
    }

    static async select(data, res) {
        let codProd = data.codProd ? data.codProd : '%'
      
        const result = (await tbEquipmentHistory.findAll({where:{[Op.and]: [condition.conditionDate('returnDate', data.returnDateInit, data.returnDateFinish),
            condition.conditionDate('entryDate', data.entryDateInit, data.entryDateFinish)]},
            attributes: ['idEquipmentHistory', 'reason', 'entryDate', 'returnDate'],
            include: {model: tbEquipment, attributes: ['idEquipment', 'codProd'], where: {codProd: {[Op.like]: codProd}}}
        })).map(values => values.dataValues)
        res.json(result)
        }

        async update(data, req, res) {
            const alterEquipmentHistory = await tbEquipmentHistory.findByPk(req)

            alterEquipmentHistory.idEquipmentHistory = data.idEquipmentHistory
            alterEquipmentHistory.idEquipment = data.idEquipment
            alterEquipmentHistory.reason = data.reason
            alterEquipmentHistory.entryDate = data.entryDate
            alterEquipmentHistory.returnDate = data.returnDate

            await alterEquipmentHistory.save()
            res.json({message: 'Updated successfully'})

        }

    
}

module.exports = EquipmentHistory