const { Op } = require('sequelize')
const tbEquipament = require('../constant/tbEquipament')
const tbfilial = require('../constant/tbFilial')
const tbSector = require('../constant/tbSector')
const tbSupplier = require('../constant/tbSupplier')
const tbUser = require('../constant/tbUser')

class Equipament {
    codProd
    equipament
    type
    idUser
    value
    idFilial
    idSector
    idSupplier
    entryDate
    deletionDate

    constructor(data) {
        this._codProd = data.codProd
        this._equipament = data.equipament
        this._type = data.type
        this._idUser = data.idUser
        this._value = data.value
        this._idFilial = data.idFilial
        this._idSector = data.idSector
        this._idSupplier = data.idSupplier
        this._entryDate = data.entryDate
        this._deletionDate = data.deletionDate
    }

    get _codProd() {
        return this.codProd
    }

    set _codProd(value) {
        if(value == undefined) {
            throw new Error('Invalid codProd')
        }
        return this.codProd = value
    }

    get _equipament() {
        return this.equipament
    }

    set _equipament(value) {
        if(value == undefined) {
            return this.equipament = null
        }
        return this.equipament = value
    }

    get _type() {
        return this.type
    }

    set _type(value) {
        if(value == undefined) {
            throw new Error('Invalid type')
        }
        return this.type = value
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

    get _value() {
        return this.value
    }

    set _value(value) {
        if(value == undefined) {
            throw new Error('Invalid value')
        }
        return this.value = value
    }

    get _idFilial() {
        return this.idFilial
    }

    set _idFilial(value) {
        if(value == undefined) {
            throw new Error('Invalid idFilial')
        }
        return this.idFilial = value
    }

    get _idSector() {
        return this.idSector
    }

    set _idSector(value) {
        if(value == undefined) {
            throw new Error('Invalid idSector')
        }
        return this.idSector = value
    }

    get _idSupplier() {
        return this.idSupplier
    }

    set _idSupplier(value) {
        if(value == undefined) {
            throw new Error('Invalid idSupplier')
        }
        return this.idSupplier = value
    }

    get _entryDate() {
        return this.entryDate
    }

    set _entryDate(value) {
        if(value == undefined){
            throw new Error('Invalid entryDate')
        }

        return this.entryDate = new Date(value.split('/').reverse().join('-')).toISOString().split('T')[0]
    }

    get _deletionDate() {
        return this.deletionDate
    }

    set _deletionDate(value) {
        if(value == undefined) {
            return this.deletionDate = null
        }
        return this.deletionDate = new Date(value.split('/').reverse().join('-')).toISOString().split('T')[0]
    }

    async insertEquipament(data, res) {
        const existEquipament = await tbEquipament.findOne({where: {codProd: data.codProd}})
        
        if(existEquipament) {
            throw new Error('exist already equipament')
        }
        await tbEquipament.create(data)
        res.json({message: 'OK'})
    }

    static async selectAllEquipament(res) {
        const result = (await tbEquipament.findAll({attributes: ['codProd', 'equipament', 'type', 'value','entryDate'], 
            include: [{model: tbUser, attributes: ['username']}, {model: tbfilial, attributes: ['filial']}, 
            {model: tbSector, attributes: ['sector']}, {model: tbSupplier, attributes: ['supplier']}]
        })).map(
            equipament => equipament.dataValues
        )
        res.json(result)
    }

    static async selectEquipament(data, res) {

        let codProd = data.codProd ? data.codProd : '%'
        let equipament = data.equipament ? data.equipament : '%'
        let type = data.type ? data.type : '%'
        let idUser = data.idUser ? data.idUser : '%'
        let idFilial = data.idFilial ? data.idFilial : '%'

        const result = (await tbEquipament.findAll({where: {[Op.and]: [{codProd:{[Op.like]:codProd}}, {equipament: {[Op.like]: equipament}}, 
            {type: {[Op.like]: type }}, {idUser: {[Op.like]: idUser}}, {idFilial: {[Op.like]: idFilial}}]},
            attributes: ['codProd', 'equipament', 'type', 'value', 'entryDate'],
            include: [{model: tbUser, attributes: ['username']}, {model: tbfilial, attributes: ['filial']},
            {model: tbSector, attributes: ['sector']}, {model: tbSupplier, attributes: ['supplier']}]}
        )).map(
            value => value.dataValues
        )
        res.json(result)
    }

    async updateEquipament(req, data, res) {
        let pk = await tbEquipament.findByPk(req)

        pk.codprod = data.codProd
        pk.equipament = data.equipament
        pk.type = data.type
        pk.idUser = data.idUser
        pk.value = data.value
        pk.idFilial = data.idFilial
        pk.idSector = data.idSector
        pk.idSupplier = data.idSupplier
        pk.entryDate = data.entryDate
        pk.deletionDate = data.deletionDate

        await pk.save()
        res.json({message: 'Updated successfully'})
    }

}

module.exports = Equipament