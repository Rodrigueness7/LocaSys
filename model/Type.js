const tbType = require('../constant/tbType')
const addLog = require('../constant/addLog')
const tbEquipment = require('../constant/tbEquipment')

class Type {
    idType
    type

    constructor(data) {
        this._idType = data.idType
        this._type = data.type
    }

    get _idType() {
        return this.idType
    }

    set _idType(value) {
        if (value == undefined) {
            return this.idType = 0
        }
        return this.idType = value
    }

    get _type() {
        return this.type
    }

    set _type(value) {
        if (value == undefined) {
            throw new Error('Invalid type')
        }
        return this.type = value
    }

    async insert(data, res, req) {
        const existType = tbType.findOne({ where: { type: data.type } })

        if (existType) {
            throw new Error('exist already equipment')
        }

        await tbType.create(data)
        addLog.CreateLog(data.type, 'Adicionado', 'Adicionando Tipo')
        res.status(201).json({ successMessage: 'Add successfully' })
    }

    static async selectAll(res) {
        const result = (await tbType.findAll({ attributes: ['idType', 'type'] })).map(
            type => type.dataValues
        )
        res.status(200).json(result)
    }

    static async selectId(req, res) {
        await tbType.findByPk(req.params.idType, { attributes: ['idType', 'type'] }).then(
            type => res.status(200).json(type.dataValues)
        )
    }

    async update(req, data, res) {
        const existTypeEquipment = await tbEquipment.findOne({ where: { idType: req.params.idType } })
        const existType = await tbType.findOne({ where: { type: data.type } })

        if (existTypeEquipment) {
            throw new Error('Exist user registered in this profile')
        }

        if (existType.find(value => value.dataValues.idType != req.params.idType)) {
            throw new Error('Exist already type registered:' + ' (' + (existType.filter(value => value.dataValues.idType != req.params.idType)
                .map(value => value.dataValues.type).join(', ').concat(') ')))
        }

        const alterType = await tbType.findByPk(req.params.idType)

        alterType.idType = data.idType
        alterType.type = data.type

        await alterType.save()
        addLog.CreateLog(data.type, 'Atualizado', 'Atualizado Tipo', req)

        res.status(200).json({ successMessage: 'Updated successfully' })
    }

    static async delete(req, res) {
        const removerType = await tbType.findByPk(req.params.idType)

        removerType.destroy()
        addLog.CreateLog(removerType.dataValues.type, 'Deletado', 'Deletado Tipo', req)
        res.status(200).json({ successMessage: 'Delete Tipo' })
    }

}

module.exports = Type