const tbFilial = require('../constant/tbFilial')
const tbSector = require('../constant/tbSector')
const tbEquipment = require('../constant/tbEquipment')
const AddLog = require('../constant/addLog')

class Filial {
    idFilial
    filial  
    CNPJ
    corporateName
    uniqueIdentifier
    deletionDate


    constructor(data) {
        this._idFilial = data.idFilial
        this._filial = data.filial
        this._CNPJ = data.CNPJ
        this._coporateName = data.corporateName
        this._uniqueIdentifier = data.uniqueIdentifier
        this._deletionDate = data.deletionDate

    }

    get _idFilial() {
        return this.idFilial
    }

    set _idFilial(value) {
        if(value == undefined) {
            return this.idFilial = 0
        }
        return this.idFilial = value
    }

    get _filial() {
        return this.filial
    }

    set _filial(value) {
        if(value == undefined) {
            throw new Error('Invalid filial')
        }
        return this.filial = value
    }

    get _CNPJ() {
        return this.CNPJ
    }

    set _CNPJ(value) { 
        if(value == undefined) {
            return this.CNPJ = null
        }
        return this.CNPJ = value 
    }

    get _coporateName() { 
        return this.corporateName
    }

    set _coporateName(value) {
        if(value == undefined) {
            return this.corporateName = null
        }
        return this.corporateName = value
    }

    get _uniqueIdentifier() {
        return this.uniqueIdentifier
    }

    set _uniqueIdentifier(value) {
        if(value == undefined) {
            throw new Error('UniqueIdentifer Invalid')
        }
        return this.uniqueIdentifier = value
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


   async insertFilial(data, res, req) {
        const existFilial = await tbFilial.findOne({where: {filial: data.filial}})
            if(existFilial) {
                throw new Error('Filial already exist')
            }
            await tbFilial.create(data)
            AddLog.CreateLog(data.filial, 'Adicionado', 'Adicionado Filial', req)
            res.json({message:'Add successfully'})   
    }

    static async selectAllFilial(res) {
       const result =  (await tbFilial.findAll({where: {deletionDate: null}})).map(
            filial => filial.dataValues
        )
        res.json(result)
    }

    static async selectFilial(req, res) {
        await tbFilial.findByPk(req).then(
            idFilial => res.json(idFilial.dataValues)
        )  
    }

    async updateFilial(req, data, res) {
        const newFilial = await tbFilial.findByPk(req.params.id)

        newFilial.idFilial = data.idFilial,
        newFilial.filial = data.filial
        newFilial.CNPJ = data.CNPJ,
        newFilial.corporateName = data.corporateName,
        newFilial.uniqueIdentifier = data.uniqueIdentifier

        await newFilial.save()
        AddLog.CreateLog(data.filial, 'Atualizando', 'Atualizando Filial', req)
        res.json({message: 'Update successfully'})
        
    }

   static async inactivateFilial(req, data, res) {
        const dataFilial = await tbFilial.findByPk(req.params.idFilial)
        const countFilialInSector = await tbSector.count({where: {idFilial: req.params.idFilial}})
        const countFilialInEquipment = await tbEquipment.count({where: {idFilial: req.params.idFilial}})


        if(countFilialInEquipment > 0) {
            throw new Error('You cannot delete a Filial, as it is registered in the Equipment table')
        }

        if(countFilialInSector > 0) {
            throw new Error('You cannot delete a Filial, as it is registered in the Sector table')
        }

        dataFilial.deletionDate = new Date(data.split('/').reverse().join('-')).toISOString().split('T')[0]
        
        await dataFilial.save()
        AddLog.CreateLog(dataFilial.dataValues.filial, 'Deletado', 'Deletado Filial', req)
        res.json({message: 'Successfully inactivated'})
    }

   
}

module.exports = Filial;