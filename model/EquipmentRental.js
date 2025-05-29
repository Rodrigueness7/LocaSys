const { Op } = require('sequelize')
const tbEquipmentRental = require('../constant/tbEquipmentRental')
const condition = require('../constant/conditionDate')
const localTime = require('../constant/localTime')


class EquipmentRental {
    idEquipmentRental
    idBranch
    codProd
    proposal
    description
    init
    finish
    entry
    output
    value
    releaseDate
    initPeriod
    finishPeriod


    constructor(data) {
        this.idEquipmentRental = 0
        this._idBranch = data.idBranch
        this._codProd = data.codProd
        this._proposal = data.proposal
        this._description = data.description
        this._init = data.init
        this._finish = data.finish 
        this._entry = data.entry
        this._output = data.output
        this._value = data.value
        this.releaseDate = localTime.dateLocalTime()
        this._initPeriod = data.initPeriod
        this._finishPeriod = data.finishPeriod
    }

    get _codProd() {
        return this.codProd
    }

    get _idBranch() {
        return this.idBranch
    }

    set _idBranch(value) {
        if(value == undefined) {
            throw new Error('Invalid idBranch')
        }
        return this.idBranch = value
    }

    set _codProd(value) {
        if(value == undefined) {
            throw new Error('Invalid codProd')
        }
        return this.codProd = value
    }

    get _proposal() {
        return this.proposal
    }

    set _proposal(value) {
        if(value == undefined) {
            throw new Error('Invalid proposal')
        }
        return this.proposal = value
    }

    get _description() {
        return this.description 
    }

    set _description(value) {
        if(value == undefined) {
            throw new Error('Invalid description')
        }
        return this.description = value
    }

    get _init() {
        return this.init
    }

    set _init(value) {
        if(value == undefined) {
            return this.init = null
        }
        return this.init = new Date(value.split('/').reverse().join('-'))
    }

    get _finish() {
       return this.finish
    }

    set _finish(value) {
        if(value == undefined) {
            return this.finish = null
        }
        return this.finish = new Date(value.split('/').reverse().join('-'))
    }

    get _entry() {
        return this.entry 
    }

    set _entry(value) {
        if(value == undefined) {
            return this.entry = null
        }
        return this.entry = new Date(value.split('/').reverse().join('-'))
    }

    get _output() {
        return this.output 
    }

    set _output(value) {
        if(value == undefined) {
            return this.output = null
        }
        return this.output = new Date(value.split('/').reverse().join('-'))
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


    get _initPeriod() {
        return this.initPeriod
    }

    set _initPeriod(value) {
        if(value == undefined) {
            throw new Error('Invalid initPeriod')
        }
        return this.initPeriod =  new Date(value.split('/').reverse().join('-'))
    }

    get _finishPeriod() {
        return this.finishPeriod
    }

    set _finishPeriod(value) {
        if(value == undefined) {
            throw new Error('Invalid finishPeriod')
        }
        return this.finishPeriod =  new Date(value.split('/').reverse().join('-'))
    }

     async insert(data) {
       await tbEquipmentRental.create(data)   
    }
    
    static async selectAll(res) {
        let result = (await tbEquipmentRental.findAll({attributes:['idEquipmentRental', 'codProd','proposal', 'description', 'init', 'finish', 'entry', 'output', 'value']})).map(
            equipmentRental => equipmentRental.dataValues
        )
        res.json(result)
        
    }

    static async select(data, res) {
        let codProd = data.codProd ? data.codProd : '%'
        
        const result = (await tbEquipmentRental.findAll({where:{codProd: {[Op.like]: codProd},
            [Op.and]: [condition.conditionDate('init', data.initI, data.initF), condition.conditionDate('finish', data.finishI, data.finishF),
            condition.conditionDate('entry', data.entryI, data.entryF), condition.conditionDate('output', data.outputI, data.outputF)]}, 
            attributes: ['idEquipmentRental', 'codProd','proposal', 'description', 'init', 'finish', 'entry', 'output', 'value' ], 
          })).map(
            data => data.dataValues
        )
        res.json(result)
    }

    static async selectId(req, res) {
        await tbEquipmentRental.findByPk(req, {attributes: ['idEquipmentRental', 'codProd','proposal', 'description', 'init', 'finish', 'entry', 'output', 'value']}).then(
            equipmentRentalId => equipmentRentalId.dataValues
        )
    }

    static async deleteAll(res) {
        await tbEquipmentRental.destroy({truncate: true})
        res.json({successMessage: 'Deleted all equipment rental'})
    }

}



module.exports = EquipmentRental