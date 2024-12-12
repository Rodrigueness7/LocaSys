const tbFilial = require('../constant/tbFilial')

class Filial {
    idFilial
    filial  
    CNPJ
    corporateName
    uniqueIdentifier


    constructor(data) {
        this._idFilial = data.idFilial
        this._filial = data.filial
        this._CNPJ = data.CNPJ
        this._coporateName = data.corporateName
        this._uniqueIdentifier = data.uniqueIdentifier

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


   async insertFilial(data, res) {
        const existFilial = await tbFilial.findOne({where: {filial: data.filial}})
            if(existFilial) {
                throw new Error('Filial already exist')
            }
            await tbFilial.create(data)
            res.json({message:'Add successfully'})   
    }

    static async selectAllFilial(res) {
       const result =  (await tbFilial.findAll()).map(
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
        const newFilial = await tbFilial.findByPk(req)

        newFilial.idFilial = data.idFilial,
        newFilial.filial = data.filial
        newFilial.CNPJ = data.CNPJ,
        newFilial.corporateName = data.corporateName,
        newFilial.uniqueIdentifier = data.uniqueIdentifier

        await newFilial.save()
        res.json({message: 'Update successfully'})
        
    }

   static async deleteFilial(req) {
        await tbFilial.findByPk(req).then(
             removerFilial => removerFilial.destroy()
        )
        res.json({message: 'Delete successfuly'})
    }
}

module.exports = Filial;