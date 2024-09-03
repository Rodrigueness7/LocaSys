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
        
        try {
            if(existFilial) {
                throw new Error('Filial already exist')
            }
            await tbFilial.create(data)
            res.send('Add successfully')
        } catch (error) {
            res.send(error.message)
        }
    }

    static async findAllFilial(res) {
       const result =  (await tbFilial.findAll()).map(
            filial => filial.dataValues
        )
        res.send(result);
    }

    static async findFilial(req, res) {
        await tbFilial.findByPk(req).then(
            idFilial => res.send(idFilial.dataValues)
        )  
    }

    async updateFilial(req, data) {
        const newFilial = await tbFilial.findByPk(req) 

        newFilial.idFilial = data.idFilial,
        newFilial.filial = data.filial 

        return await newFilial.save();
        
    }

   static async deleteFilial(req) {
        const idFilial = await tbFilial.findByPk(req).then(
             removerFilial => {
               return removerFilial.destroy()
            }
        )
        return idFilial;
    }
}

module.exports = Filial;