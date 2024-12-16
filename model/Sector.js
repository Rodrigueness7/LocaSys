const tbfilial = require('../constant/tbFilial')
const tbSector = require('../constant/tbSector')

class Sector {
    idSector
    sector
    idFilial

    constructor(data) {
        this._idSector = data.idSector,
        this._sector = data.sector,
        this._idFilial = data.idFilial
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

    async insertSector(data, res) {
        const existSector = await tbSector.findOne({ where: { sector: data.sector } })
            if (existSector) {
                throw new Error('Sector already exist')
            }
            await tbSector.create(data)
            res.json({message:'Add successfully'})
        
    }

    static async findAllSector(res) {
        const result = (await tbSector.findAll({attributes: ['idSector','sector'], include: {model: tbfilial, attributes: ['idFilial', 'uniqueIdentifier', 'filial']}})).map(
            sector => sector.dataValues
        )
        res.send(result)
    }

    static async findSector(req, res) {
        await tbSector.findByPk(req).then(
            idSector => res.json(idSector.dataValues)
        )
    }

    async updateSector(req, data, res) {
        const sectorById = await tbSector.findByPk(req)

        sectorById.idSector = data.idSector
        sectorById.sector = data.sector
        sectorById.idFilial = data.idFilial

        await sectorById.save()
        res.json({message: 'Update successfully'})

    }

    static async deleteSector(req, res) {
         await tbSector.findByPk(req).then(
            data => data.destroy()
        )
        res.json({message: 'Delete successfully'})  
    }
}

module.exports = Sector;

