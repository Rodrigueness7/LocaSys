const tbBranch = require('../constant/tbBranch')
const tbSector = require('../constant/tbSector')
const tbUser = require('../constant/tbUser')
const tbEquipment = require('../constant/tbEquipment')
const AddLog = require('../constant/addLog')
const { Op } = require('sequelize')

class Sector {
    idSector
    sector
    idBranch
    deletionDate

    constructor(data) {
        this._idSector = data.idSector,
        this._sector = data.sector,
        this._idBranch = data.idBranch
        this._deletionDate = data.deletionDate
    }

    get _idSector() {
        return this.idSector
    }

    set _idSector(value) {
        if (value == undefined) {
            return this.idSector = 0
        }
        return this.idSector = value
    }

    get _sector() {
        return this.sector
    }

    set _sector(value) {
        if (value == undefined || value == '') {
            throw new Error('Invalid sector')
        }
        return this.sector = value
    }

    get _idBranch() {
        return this.idBranch
    }

    set _idBranch(value) {
        if (value == undefined) {
            throw new Error('Invalid Branch id')
        }
        return this.idBranch = value
    }

    get _deletionDate() {
        return this.deletionDate
    }

    set _deletionDate(value) {
        if (value == undefined) {
            return this.deletionDate = null
        }
        return this.deletionDate = value
    }

    async insert(data, res, req) {
        const existSector = await tbSector.findOne({ where: { [Op.and]: [{ idBranch: data.idBranch }, { sector: data.sector }] } })

        if (existSector) {
            throw new Error('Sector already exist')
        }
        await tbSector.create(data)
        AddLog.CreateLog(data.sector, 'Adicionado', 'Adicionado Setor', req)
        res.status(201).json({ successMessage: 'Add successfully' })

    }

    static async findAll(res) {
        const result = (await tbSector.findAll({ attributes: ['idSector', 'sector', 'deletionDate'], include: { model: tbBranch, attributes: ['idBranch', 'uniqueIdentifier', 'branch'] }, where: { deletionDate: null } })).map(
            sector => sector.dataValues
        )
        res.status(200).json(result)
    }

    static async find(req, res) {
        await tbSector.findByPk(req, { attributes: ['idSector', 'sector'], include: { model: tbBranch, attributes: ['idBranch', 'uniqueIdentifier', 'branch'] } }).then(
            idSector => res.status(200).json(idSector.dataValues)
        )
    }

    async update(req, uniqueIdentifier, data, res) {
        const existEquipmentSector = await tbEquipment.findOne({ where: { idSector: req.params.id } })
        const existSector = await tbSector.findAll({ where: { sector: data.sector, idBranch: data.idBranch }, include: { model: tbBranch, where: { uniqueIdentifier: uniqueIdentifier } } })

        if (existEquipmentSector) {
            throw new Error('Exist equipments in the sectors')
        }

        if (existSector.find(value => value.dataValues.idSector != req.params.id)) {
            throw new Error('Exist already sector registered:' + ' (' + (existSector.filter(value => value.dataValues.idSector != req.params.id)
                .map(value => value.dataValues.sector).join(', ').concat(') ')))
        }

        const alterSector = await tbSector.findByPk(req.params.id)

        alterSector.idSector = data.idSector
        alterSector.sector = data.sector
        alterSector.idBranch = data.idBranch

        await alterSector.save()
        AddLog.CreateLog(data.sector, 'Atualizado', 'Atualizado Setor', req)

        res.status(200).json({ successMessage: 'Update successfully' })

    }

    static async inactivate(req, data, res) {
        const dataSector = await tbSector.findByPk(req.params.idSector)
        const countSectorInUser = await tbUser.count({ where: { idSector: req.params.idSector } })
        const countSectorInEquipment = await tbEquipment.count({ where: { idSector: req.params.idSector } })


        if (countSectorInEquipment > 0) {
            throw new Error('You cannot delete a Sector, as it is registered in the Equipment table')
        }

        if (countSectorInUser > 0) {
            throw new Error('You cannot delete a Sector, as it is registered in the User table')
        }

        dataSector.deletionDate = new Date(data.split('/').reverse().join('-')).toISOString().split('T')[0]

        await dataSector.save()
        AddLog.CreateLog(dataSector.dataValues.sector, 'Deletado', 'Deletado Setor', req)
        res.status(200).json({ successMessage: 'Successfully inactivated' })
    }
}

module.exports = Sector;

