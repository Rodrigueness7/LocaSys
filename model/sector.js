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
        if(value == undefined) {
            return this.idSector = 0
        }
        return this.idSector = value
    }

    get _sector() {
        return this.sector 
    }

    set _sector(value) {
        if(value == undefined) {
            throw new Error('Invalid sector')
        }
        return this.sector = value
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

    async insertSector(data, res) {
        const existSector = await tbSector.findOne({where: {sector: data.sector}})
        try {
            if(existSector) {
                throw new Error('Sector already exist')
            }
            await tbSector.create(data)
            res.send('Add successfully')
        } catch (error) {
            res.send(error.message)
        }  
    }

    static async findAllSector(res) {
        const result =  (await tbSector.findAll()).map(
            sector => res.send(sector.dataValues)
        )
        return result
    }

}

module.exports = Sector;