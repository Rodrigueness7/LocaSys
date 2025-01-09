const { Op } = require('sequelize')
const tbEquipment = require('../constant/tbEquipment')
const tbfilial = require('../constant/tbFilial')
const tbSector = require('../constant/tbSector')
const tbSupplier = require('../constant/tbSupplier')
const tbUser = require('../constant/tbUser')
const exportXlsx = require('../content/export/fileXlsx')
const exportPdf = require('../content/export/filePdf')
const AddLog = require('../constant/addLog')

class Equipment {
    idEquipment
    codProd
    equipment
    type
    idUser
    value
    idFilial
    idSector
    idSupplier
    entryDate
    returnDate

    constructor(data) {
        this._idEquipment = data.idEquipment
        this._codProd = data.codProd
        this._equipment = data.equipment
        this._type = data.type
        this._idUser = data.idUser
        this._value = data.value
        this._idFilial = data.idFilial
        this._idSector = data.idSector
        this._idSupplier = data.idSupplier
        this._entryDate = data.entryDate
        this._returnDate = data.returnDate
    }

    get _idEquipment() {
        return this.idEquipment
    }

    set _idEquipment(value) {
        if(value == undefined) {
            return this.idEquipment = 0
        }
        return this.idEquipment = value
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

    get _equipment() {
        return this.equipment
    }

    set _equipment(value) {
        if(value == undefined) {
            return this.equipment = null
        }
        return this.equipment = value
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

    get _returnDate() {
        return this.returnDate
    }

    set _returnDate(value) {
        if(value == undefined) {
            return this.returnDate = null
        }
        return this.returnDate = new Date(value.split('/').reverse().join('-')).toISOString().split('T')[0]
    }

    async insertEquipment(data, res, req) {
        const existEquipment = await tbEquipment.findOne({where: {codProd: data.codProd}})
        
        if(existEquipment) {
            throw new Error('exist already equipment')
        }
        await tbEquipment.create(data)
        AddLog.CreateLog(data.codProd, 'Adicionado', 'Adicionado Código', req)
        res.json({message: 'Add successfully'})
    }

    static async selectAllEquipment(res) {
        const result = (await tbEquipment.findAll({ where: {returnDate: null}, attributes: ['idEquipment', 'codProd', 'equipment', 'type', 'value','entryDate', 'returnDate'], 
            include: [{model: tbUser, attributes: ['idUser','username']}, {model: tbfilial, attributes: ['idFilial','filial']}, 
            {model: tbSector, attributes: ['idSector','sector']}, {model: tbSupplier, attributes: ['idSupplier','supplier']}]
        })).map(
            equipment => equipment.dataValues
        )
        res.json(result)
    }

    static async selectEquipmentId(req, res) {
        await tbEquipment.findByPk(req, {attributes: ['idEquipment', 'codProd', 'equipment', 'type', 'value','entryDate', 'returnDate'], include: [{model: tbUser, attributes: ['idUser','username']}, {model: tbfilial, attributes: ['idFilial','filial']}, {model: tbSector, attributes:['idSector','sector']}, {model: tbSupplier, attributes: ['idSupplier','supplier']}]}).then(
            idEquipment => res.json(idEquipment.dataValues)
        )
    }

    static async selectEquipment(data, res) {

        let codProd = data.codProd ? data.codProd : '%'
        let equipment = data.equipment ? data.equipment : '%'
        let type = data.type ? data.type : '%'
        let idUser = data.idUser ? data.idUser : '%'
        let idFilial = data.idFilial ? data.idFilial : '%'

        const result = (await tbEquipment.findAll({where: {returnDate: null, [Op.and]: [{codProd:{[Op.like]:codProd}},{equipment: {[Op.like]: equipment}}, 
            {type: {[Op.like]: type }}, {idUser: {[Op.like]: idUser}}, {idFilial: {[Op.like]: idFilial}}]},
            attributes: ['idEquipment', 'codProd', 'equipment', 'type', 'value', 'entryDate', 'returnDate'],
            include: [{model: tbUser, attributes: ['idUser','username']}, {model: tbfilial, attributes: ['idFilial','filial']},
            {model: tbSector, attributes: ['idSector','sector']}, {model: tbSupplier, attributes: ['idSupplier','supplier']}]}
        )).map(
            value => value.dataValues
        )
        res.json(result)
    }

    async updateEquipment(req, data, res) {
        let pk = await tbEquipment.findByPk(req.params.idEquipment)

        pk.codProd = data.codProd
        pk.equipment = data.equipment
        pk.type = data.type
        pk.idUser = data.idUser
        pk.value = data.value
        pk.idFilial = data.idFilial
        pk.idSector = data.idSector
        pk.idSupplier = data.idSupplier
        pk.entryDate = data.entryDate
        pk.returnDate = data.returnDate

        await pk.save() 
        AddLog.CreateLog(data.codProd, 'Atualizado', 'Atualizado Código', req)
        res.json({message: 'Updated successfully'})
    }

    static async returnEquipment(req, data, res) {
        let dataEquipment = await tbEquipment.findByPk(req.params.idEquipment)

        dataEquipment.returnDate = new Date(data.split('/').reverse().join('-')).toISOString().split('T')[0]

       await dataEquipment.save()
       AddLog.CreateLog(dataEquipment.dataValues.codProd, 'Deletado', 'Deletado Código', req)
       res.json({message: 'Returned successfully'})
    }

    static async exportEquipmentlXlsx(req, res) {
        const result = ( await tbEquipment.findAll({attributes: ['idEquipment', 'codProd', 'equipment', 'type', 'value', 'entryDate', 'returnDate']})).map(
            data => data.dataValues
        )
        exportXlsx.fileXlsx(result, req)
        res.json({message: 'File generated successfully'})
    }

    static async exportEquipmentPdf(req, res) {
        const result = (await tbEquipment.findAll({attributes: ['idEquipment', 'codProd', 'equipment', 'type', 'value', 'entryDate', 'returnDate']})).map(
            data => data.dataValues
        )
        exportPdf.filePdf(result, req)
        res.json({message: 'File generated successfully'})
    }

}

module.exports = Equipment