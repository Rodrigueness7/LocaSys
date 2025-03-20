const tbBranch = require('../constant/tbBranch')
const tbSector = require('../constant/tbSector')
const tbUser = require('../constant/tbUser')
const tbEquipment = require('../constant/tbEquipment')
const AddLog = require('../constant/addLog')

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
        if (value == undefined) {
            throw new Error('Invalid sector')
        }
        return this.sector = value
    }

    get _idBranch() {
        return this.idBranch
    }

    set _idBranch(value) {
        if (value == undefined) {
            throw new Error('Invalid idBranch')
        }
        return this.idBranch = value
    }

    get _deletionDate() {
        return this.deletionDate
    }

    set _deletionDate(value) {
        if(value == undefined) {
            return this.deletionDate = null
        }
        return this.deletionDate = value
    }

    async insert(data, uniqueIdentifier,res, req) {
        const existSector = await tbSector.findOne({ where: { sector: data.sector}, include: {model: tbBranch, where: {uniqueIdentifier: uniqueIdentifier}}})
       
        if (existSector) {
                throw new Error('Sector already exist')
            }
            await tbSector.create(data)
            AddLog.CreateLog(data.sector, 'Adicionado', 'Adicionado Setor', req)
            res.json({successMessage:'Add successfully'})
        
    }

    static async findAll(res) {
        const result = (await tbSector.findAll({attributes: ['idSector','sector', 'deletionDate'], include: {model: tbBranch, attributes: ['idBranch', 'uniqueIdentifier', 'branch']}, where: {deletionDate: null}})).map(
            sector => sector.dataValues
        )
        res.json(result)
    }

    static async find(req, res) {
        await tbSector.findByPk(req, {attributes: ['idSector','sector'], include: {model: tbBranch, attributes: ['idBranch', 'uniqueIdentifier', 'branch']}}).then(
            idSector => res.json(idSector.dataValues)
        )
    }

    async update(req, data, res) {
        const alterSector = await tbSector.findByPk(req.params.id)

        alterSector.idSector = data.idSector
        alterSector.sector = data.sector
        alterSector.idBranch = data.idBranch

        await alterSector.save()
        AddLog.CreateLog(data.sector, 'Atualizado', 'Atualizado Setor', req)
        res.json({successMessage: 'Update successfully'})

    }

    static async inactivate(req, data, res) {
        const dataSector = await tbSector.findByPk(req.params.idSector)
        const countSectorInUser = await tbUser.count({where: {idSector: req.params.idSector}})
        const countSectorInEquipment = await tbEquipment.count({where: {idSector: req.params.idSector}})


        if(countSectorInEquipment > 0) {
            throw new Error('You cannot delete a Sector, as it is registered in the Equipment table')
        }
        
        if(countSectorInUser > 0) {
            throw new Error('You cannot delete a Sector, as it is registered in the User table')
        }

        dataSector.deletionDate = new Date(data.split('/').reverse().join('-')).toISOString().split('T')[0]

        await dataSector.save()
        AddLog.CreateLog(dataSector.dataValues.sector, 'Deletado', 'Deletado Setor', req)
        res.json({successMessage: 'Successfully inactivated'})  
    }
}

module.exports = Sector;

