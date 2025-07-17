const tbEquipmentHistory = require('../constant/tbEquipmentHistory')
const tbEquipment = require('../constant/tbEquipment')
const tbUser = require('../constant/tbUser')
const tbSector = require('../constant/tbSector')
const tbBranch = require('../constant/tbBranch')
const condition = require('../constant/conditionDate')
const { Op } = require('sequelize')



class EquipmentHistory {
    idEquipmentHistory
    idEquipment
    reason
    idUser
    idSector
    idBranch
    value
    entryDate
    returnDate

    constructor(data) {
        this._idEquipmentHistory = data.idEquipmentHistory
        this._idEquipment = data.idEquipment
        this._reason = data.reason
        this._idUser = data.idUser
        this._idSector = data.idSector
        this._idBranch = data.idBranch
        this._value = data.value
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

    get _idUser() {
        return this.idUser
    }

    set _idUser(value) {
        if(value == undefined) {
            throw new Error('Invalid idEquipment')
        }
        return this.idUser = value
    }

    get _idSector() {
        return this.idSector
    }

    set _idSector(value) {
      if(value == undefined) {
            throw new Error('Invalid idEquipment')
        }
        return this.idSector = value
    }

     get _idBranch() {
        return this.idBranch
    }

    set _idBranch(value) {
       if(value == undefined) {
            throw new Error('Invalid idEquipment')
        }
        return this.idBranch = value
    }

     get _value() {
        return this.value
    }

    set _value(value) {
        if (value == undefined) {
            throw new Error('Invalid value')
        }
        return this.value = value
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
       res.json({successMessage: 'Add successfully'})
    }

    static async selectAll(res) {
        const result = (await tbEquipmentHistory.findAll({attributes:['idEquipmentHistory', 'reason', 'entryDate', 'returnDate', 'value'], 
            include: [{model: tbEquipment, attributes: ['idEquipment','codProd', 'equipment', 'type']},{model: tbUser, attributes: ['username']},
        {model: tbSector, attributes:['sector']}, {model: tbBranch, attributes: ['branch']}]})).map(
            values => values.dataValues
        )
        res.json(result)
    }

    static async selectId(req, res) {
        await tbEquipmentHistory.findByPk(req, {attributes:['idEquipmentHistory', 'reason', 'entryDate', 'returnDate', 'value'],
            include: [{model: tbEquipment, attributes: ['idEquipment','codProd', 'equipment', 'type']}, {model: tbUser, attributes: ['username']},
            {model: tbSector, attributes:['sector']}, {model: tbBranch, attributes: ['branch']}]
        }).then(
            idEquipmentHistory => res.json(idEquipmentHistory.dataValues)
        )
    }

    static async select(data, res) {
        let codProd = data.codProd ? data.codProd : '%'
      
        const result = (await tbEquipmentHistory.findAll({where:{[Op.and]: [condition.conditionDate('returnDate', data.returnDateInit, data.returnDateFinish),
            condition.conditionDate('entryDate', data.entryDateInit, data.entryDateFinish)]},
            attributes: ['idEquipmentHistory', 'reason', 'entryDate', 'returnDate'],
            include: [{model: tbEquipment, attributes: ['idEquipment', 'codProd'], where: {codProd: {[Op.like]: codProd}}}, {model: tbUser, attributes: ['username']},
        {model: tbSector, attributes: ['sector']}, {model: tbBranch, attributes: ['branch']}]
        })).map(values => values.dataValues)
        res.json(result)
        }

        async update(data, req, res) {
            const alterEquipmentHistory = await tbEquipmentHistory.findByPk(req)

            alterEquipmentHistory.idEquipmentHistory = data.idEquipmentHistory
            alterEquipmentHistory.idEquipment = data.idEquipment
            alterEquipmentHistory.reason = data.reason
            alterEquipmentHistory.idUser = data.idUser
            alterEquipmentHistory.idSector = data.idSector
            alterEquipmentHistory.idBranch = data.idBranch
            alterEquipmentHistory.value = data.value
            alterEquipmentHistory.entryDate = data.entryDate
            alterEquipmentHistory.returnDate = data.returnDate

            await alterEquipmentHistory.save()
            res.json({successMessage: 'Updated successfully'})

        }

}

module.exports = EquipmentHistory