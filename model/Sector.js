const tbfilial = require('../constant/tbFilial')
const tbSector = require('../constant/tbSector')
const tbUser = require('../constant/tbUser')
const tbEquipment = require('../constant/tbEquipment')
const AddLog = require('../constant/addLog')

class Sector {
    idSector
    sector
    idFilial
    deletionDate

    constructor(data) {
        this._idSector = data.idSector,
        this._sector = data.sector,
        this._idFilial = data.idFilial
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

    get _idFilial() {
        return this.idFilial
    }

    set _idFilial(value) {
        if (value == undefined) {
            throw new Error('Invalid idFilial')
        }
        return this.idFilial = value
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

    async insertSector(data, uniqueIdentifier,res, req) {
        const existSector = await tbSector.findOne({ where: { sector: data.sector}, include: {model: tbfilial, where: {uniqueIdentifier: uniqueIdentifier}}})
       
        if (existSector) {
                throw new Error('Sector already exist')
            }
            await tbSector.create(data)
            AddLog.CreateLog(data.sector, 'Adicionado', 'Adicionado Setor', req)
        res.json({message:'Add successfully'})
        
    }

    static async findAllSector(res) {
        const result = (await tbSector.findAll({attributes: ['idSector','sector', 'deletionDate'], include: {model: tbfilial, attributes: ['idFilial', 'uniqueIdentifier', 'filial']}, where: {deletionDate: null}})).map(
            sector => sector.dataValues
        )
        res.json(result)
    }

    static async findSector(req, res) {
        await tbSector.findByPk(req, {attributes: ['idSector','sector'], include: {model: tbfilial, attributes: ['idFilial', 'uniqueIdentifier', 'filial']}}).then(
            idSector => res.json(idSector.dataValues)
        )
    }

    async updateSector(req, data, res) {
        const sectorById = await tbSector.findByPk(req.params.id)

        sectorById.idSector = data.idSector
        sectorById.sector = data.sector
        sectorById.idFilial = data.idFilial

        await sectorById.save()
        AddLog.CreateLog(data.sector, 'Atualizado', 'Atualizado Setor', req)
        res.json({message: 'Update successfully'})

    }

    static async inactivateSector(req, data, res) {
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
        res.json({message: 'Successfully inactivated'})  
    }
}

module.exports = Sector;

