const tbFilial = require('../constant/tbFilial')

class Filial {
    idFilial
    filial  

    constructor(data) {
        this._idFilial = data.idFilial
        this._filial = data.filial
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