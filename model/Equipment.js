const { Op } = require('sequelize')
const tbEquipment = require('../constant/tbEquipment')
const tbBranch = require('../constant/tbBranch')
const tbSector = require('../constant/tbSector')
const tbSupplier = require('../constant/tbSupplier')
const tbUser = require('../constant/tbUser')
const exportXlsx = require('../content/export/fileXlsx')
const { equipmentReport } = require('../content/export/reports/equipmentReport')
const AddLog = require('../constant/addLog')
const { DecryptToken } = require('../constant/decodeToken')
const tbTypeEquipment = require('../constant/tbTypeEquipment')


class Equipment {
    idEquipment
    codProd
    equipment
    idTypeEquipment
    idUser
    value
    idBranch
    idSector
    idSupplier
    entryDate
    returnDate

    constructor(data, req) {
        this._idEquipment = data.idEquipment
        this._codProd = data.codProd
        this._equipment = data.equipment
        this._idTypeEquipment = data.idTypeEquipment
        this._idUser = data.idUser
        this._value = (DecryptToken(req).permission.find(itens => itens == 5) === undefined) ? 0 : data.value
        this._idBranch = data.idBranch
        this._idSector = data.idSector
        this._idSupplier = data.idSupplier
        this._entryDate = data.entryDate
        this._returnDate = data.returnDate
    }

    get _idEquipment() {
        return this.idEquipment
    }

    set _idEquipment(value) {
        if (value == undefined) {
            return this.idEquipment = 0
        }
        return this.idEquipment = value
    }

    get _codProd() {
        return this.codProd
    }

    set _codProd(value) {
        if (value == '' || value == 0) {
            throw new Error('invalid product code ')
        }
        return this.codProd = value
    }

    get _equipment() {
        return this.equipment
    }

    set _equipment(value) {
        if (value == undefined || value == '') {
            throw new Error('Invalid Equipment')
        }
        return this.equipment = value
    }

    get _idTypeEquipment() {
        return this.idTypeEquipment
    }

    set _idTypeEquipment(value) {
        if (value == undefined || value == '') {
            throw new Error('invalid equipment type id')
        }
        return this.idTypeEquipment = value
    }

    get _idUser() {
        return this.idUser
    }

    set _idUser(value) {
        if (value == undefined || value == '') {
            throw new Error('Invalid User id')
        }
        return this.idUser = value
    }

    get _value() {
        return this.value
    }

    set _value(value) {
        if (value == undefined || value === '') {
            throw new Error('Invalid value')
        }
        return this.value = value
    }

    get _idBranch() {
        return this.idBranch
    }

    set _idBranch(value) {
        if (value == undefined || value == '') {
            throw new Error('Invalid Branch id')
        }
        return this.idBranch = value
    }

    get _idSector() {
        return this.idSector
    }

    set _idSector(value) {
        if (value == undefined || value == '') {
            throw new Error('Invalid Sector id ')
        }
        return this.idSector = value
    }

    get _idSupplier() {
        return this.idSupplier
    }

    set _idSupplier(value) {
        if (value == undefined || value == '') {
            throw new Error('Invalid Supplier id')
        }
        return this.idSupplier = value
    }

    get _entryDate() {
        return this.entryDate
    }

    set _entryDate(value) {
        if (value == undefined || value == '') {
            throw new Error('Invalid entry Date')
        }
        return this.entryDate = new Date(value.split('/').reverse().join('-')).toISOString().split('T')[0]
    }

    get _returnDate() {
        return this.returnDate
    }

    set _returnDate(value) {
        if (value == undefined || value == '') {
            return this.returnDate = null
        }
        return this.returnDate = new Date(value.split('/').reverse().join('-')).toISOString().split('T')[0]
    }

    async insert(data, res, req) {
        const existEquipment = await tbEquipment.findOne({ where: { codProd: data.codProd}})

        if (existEquipment) {
            if (existEquipment.dataValues.codProd !== null) {
                throw new Error('Exist already equipment')
            } 
        }
        await tbEquipment.create(data)
        AddLog.CreateLog(data.codProd, 'Adicionado', 'Adicionado Código', req)
        res.status(201).json({ successMessage: 'Add successfully' })
    }

    static async selectAll(res, req) {
        const result = (await tbEquipment.findAll({
            attributes: ['idEquipment', 'codProd', 'equipment','value', 'entryDate', 'returnDate'],
            include: [{ model: tbUser, attributes: ['idUser', 'username'] }, { model: tbBranch, attributes: ['idBranch', 'branch'] },
            { model: tbSector, attributes: ['idSector', 'sector'] }, { model: tbSupplier, attributes: ['idSupplier', 'supplier'] }, {model: tbTypeEquipment, attributes: ['idTypeEquipment', 'typeEquipment']}]
        })).map(
            equipment => equipment.dataValues
        )

        if (DecryptToken(req).permission.find(itens => itens == 5) === undefined) {
            result.map(itens => {
                delete itens.value
            })
        }

        res.status(200).json(result)
    }

    static async selectId(req, res) {
        await tbEquipment.findByPk(req.params.idEquipment, { attributes: ['idEquipment', 'codProd', 'equipment','value', 'entryDate', 'returnDate'], include: [{ model: tbUser, attributes: ['idUser', 'username'] }, { model: tbBranch, attributes: ['idBranch', 'branch'] }, { model: tbSector, attributes: ['idSector', 'sector'] }, { model: tbSupplier, attributes: ['idSupplier', 'supplier']}, {model: tbTypeEquipment, attributes: ['idTypeEquipment', 'typeEquipment']}]}).then(
            idEquipment => {
                res.status(200).json(idEquipment.dataValues)
            }
        )
    }

    static async select(data, res) {

        let codProd = data.codProd ? data.codProd : '%'
        let equipment = data.equipment ? data.equipment : '%'
        let idTypeEquipment = data.idTypeEquipment ? data.idTypeEquipment : '%'
        let idUser = data.idUser ? data.idUser : '%'
        let idBranch = data.idBranch ? data.idBranch : '%'

        const result = (await tbEquipment.findAll({
            where: {
                returnDate: null, [Op.and]: [{ codProd: { [Op.like]: codProd } }, { equipment: { [Op.like]: equipment } },
                { idTypeEquipment: { [Op.like]: idTypeEquipment } }, { idUser: { [Op.like]: idUser } }, { idBranch: { [Op.like]: idBranch } }]
            },
            attributes: ['idEquipment', 'codProd', 'equipment', 'value', 'entryDate', 'returnDate'],
            include: [{ model: tbUser, attributes: ['idUser', 'username'] }, { model: tbBranch, attributes: ['idBranch', 'branch'] },
            { model: tbSector, attributes: ['idSector', 'sector'] }, { model: tbSupplier, attributes: ['idSupplier', 'supplier'] }, 
            {model: tbTypeEquipment, attributes: ['idTypeEquipment', 'typeEquipment']}]
        }
        )).map(
            value => value.dataValues
        )
        res.status(200).json(result)
    }

    async update(req, data, res) {
        const existEquipment = await tbEquipment.findAll({ where: { codProd: data.codProd } })

        if (existEquipment.find(value => value.dataValues.idEquipment != req.params.idEquipment)) {
            throw new Error('Exist already equipment registered:' + ' (' + (existEquipment.filter(value => value.dataValues.idEquipment != req.params.id)
                .map(value => value.dataValues.codProd).join(', ').concat(') ')))
        }
        const alterEquipment = await tbEquipment.findByPk(req.params.idEquipment)

        alterEquipment.codProd = data.codProd
        alterEquipment.equipment = data.equipment
        alterEquipment.idTypeEquipment = data.idTypeEquipment
        alterEquipment.idUser = data.idUser
        alterEquipment.value = (DecryptToken(req).permission.find(itens => itens == 5) === undefined) ? alterEquipment.dataValues.value : data.value
        alterEquipment.idBranch = data.idBranch
        alterEquipment.idSector = data.idSector
        alterEquipment.idSupplier = data.idSupplier
        alterEquipment.entryDate = data.entryDate
        alterEquipment.returnDate = data.returnDate

        await alterEquipment.save()
        AddLog.CreateLog(data.codProd, 'Atualizado', 'Atualizado Código', req)
        res.status(200).json({ successMessage: 'Updated successfully' })
    }

    static async return(req, data, res) {
        let dataEquipment = await tbEquipment.findByPk(req.params.idEquipment)

        dataEquipment.returnDate = data == null ? null : new Date(data.split('/').reverse().join('-')).toISOString().split('T')[0]

        await dataEquipment.save()
        AddLog.CreateLog(dataEquipment.dataValues.codProd, 'Deletado', 'Deletado Código', req)
        res.status(200).json({ successMessage: 'Returned successfully' })
    }

    static async exportlXlsx(req, res) {
        const result = (await tbEquipment.findAll({attributes: ['idEquipment', 'codProd', 'equipment', 'value', 'entryDate', 'returnDate'], include: {model: tbTypeEquipment, attributes:['idTypeEquipment', 'typeEquipment']}})).map(
            data => data.dataValues
        )
        exportXlsx.fileXlsx(result, req)
        res.status(200).json({ successMessage: 'File generated successfully' })
    }

    static async export(adress, data, res) {

        let codProd = data.codProd ? data.codProd : '%'
        let equipment = data.equipment ? data.equipment : '%'
        let idTypeEquipment = data.idTypeEquipment ? data.idTypeEquipment : '%'
        let idUser = data.idUser ? data.idUser : '%'
        let idBranch = data.idBranch ? data.idBranch : '%'

        const result = (await tbEquipment.findAll({
            where: {
                [Op.and]: [{ codProd: { [Op.like]: codProd } }, { equipment: { [Op.like]: equipment } },
                { idTypeEquipment: { [Op.like]: idTypeEquipment } }, { idUser: { [Op.like]: idUser } }, { idBranch: { [Op.like]: idBranch } }]
            },
            attributes: ['idEquipment', 'codProd', 'equipment', 'value', 'entryDate', 'returnDate'],
            include: [{ model: tbUser, attributes: ['idUser', 'username'] }, { model: tbBranch, attributes: ['idBranch', 'branch'] },
            { model: tbSector, attributes: ['idSector', 'sector'] }, { model: tbSupplier, attributes: ['idSupplier', 'supplier']}, 
            {model: tbTypeEquipment, attributes: ['idTypeEquipment', 'typeEquipment']}]
        }
        )).map(
            value => value.dataValues
        )

        if (result.length < 1) {
            throw new Error('There is no data')
        }

        equipmentReport(result, adress)
        res.status(200).json({ successMessage: 'File generated successfully' })
    }

}

module.exports = Equipment