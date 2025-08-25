const tbTypeEquipment = require('../constant/tbTypeEquipment')
const addLog = require('../constant/addLog')
const tbEquipment = require('../constant/tbEquipment')

class TypeEquipment {
    idTypeEquipment
    typeEquipment

    constructor(data) {
        this._idTypeEquipment = data.idTypeEquipment
        this._typeEquipment = data.typeEquipment
    }

    get _idTypeEquipment() {
        return this.idTypeEquipment
    }

    set _idTypeEquipment(value) {
        if (value == undefined) {
            return this.idTypeEquipment = 0
        }
        return this.idTypeEquipment = value
    }

    get _typeEquipment() {
        return this.typeEquipment
    }

    set _typeEquipment(value) {
        if (value == undefined) {
            throw new Error('Invalid typeEquipment')
        }
        return this.typeEquipment = value
    }

    async insert(data, res, req) {
        const existTypeEquipment = await tbTypeEquipment.findOne({ where: { type: data.typeEquipment }})

        if (existTypeEquipment) {
            throw new Error('exist already typeEquipment')
        }

        await tbTypeEquipment.create(data)
        addLog.CreateLog(data.typeEquipment, 'Adicionado', 'Adicionando Tipo de Equipamento', req)
        res.status(201).json({ successMessage: 'Add successfully' })
    }

    static async selectAll(res) {
        const result = (await tbTypeEquipment.findAll({ attributes: ['idTypeEquipment', 'typeEquipment'] })).map(
            typeEquipment => typeEquipment.dataValues
        )
        res.status(200).json(result)
    }

    static async selectId(req, res) {
        await tbTypeEquipment.findByPk(req.params.idTypeEquipment, { attributes: ['idTypeEquipment', 'typeEquipment'] }).then(
            typeEquipment => res.status(200).json(typeEquipment.dataValues)
        )
    }

    async update(req, data, res) {
        const existTypeInEquipment = await tbEquipment.findOne({ where: { idType: req.params.idTypeEquipment} })
        const existTypeEquipment = await tbTypeEquipment.findAll({ where: { type: data.typeEquipment } })

        if (existTypeInEquipment) {
            throw new Error('Exist equipment registered in this type')
        }

        if (existTypeEquipment.find(value => value.dataValues.idTypeEquipment != req.params.idTypeEquipment)) {
            throw new Error('Exist already type equipment registered:' + ' (' + (existTypeEquipment.filter(value => value.dataValues.idTypeEquipment != req.params.idTypeEquipment)
                .map(value => value.dataValues.idTypeEquipment).join(', ').concat(') ')))
        }

        const alterTypeEquipment = await tbTypeEquipment.findByPk(req.params.idTypeEquipment)

        alterTypeEquipment.idTypeEquipment = data.idTypeEquipment
        alterTypeEquipment.typeEquipment = data.typeEquipment

        await alterTypeEquipment.save()
        addLog.CreateLog(data.typeEquipment, 'Atualizado', 'Atualizado Tipo de Equipamento', req)

        res.status(200).json({ successMessage: 'Updated successfully' })
    }

    static async delete(req, res) {
        const removeTypeEquipment = await tbTypeEquipment.findByPk(req.params.idTypeEquipment)

        removeTypeEquipment.destroy()
        addLog.CreateLog(removeTypeEquipment.dataValues.type, 'Deletado', 'Deletado Tipo de Equipamento', req)
        res.status(200).json({ successMessage: 'Delete Type Equipment' })
    }

}

module.exports = TypeEquipment