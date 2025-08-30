
const tbSector = require('../constant/tbSector')
const tbEquipment = require('../constant/tbEquipment')
const AddLog = require('../constant/addLog')
const { Op } = require('sequelize')
const tbBranch = require('../constant/tbBranch')

class Branch {
    idBranch
    branch
    CNPJ
    corporateName
    uniqueIdentifier
    deletionDate


    constructor(data) {
        this._idBranch = data.idBranch
        this._branch = data.branch
        this._CNPJ = data.CNPJ
        this._coporateName = data.corporateName
        this._uniqueIdentifier = data.uniqueIdentifier
        this._deletionDate = data.deletionDate

    }

    get _idBranch() {
        return this.idBranch
    }

    set _idBranch(value) {
        if (value == undefined || value == '') {
            return this.idBranch = 0
        }
        return this.idBranch = value
    }

    get _branch() {
        return this.branch
    }

    set _branch(value) {
        if (value == undefined || value == '') {
            throw new Error('Invalid branch')
        }
        return this.branch = value
    }

    get _CNPJ() {
        return this.CNPJ
    }

    set _CNPJ(value) {
        if (value == undefined || value == '') {
            return this.CNPJ = null
        }
        return this.CNPJ = value
    }

    get _coporateName() {
        return this.corporateName
    }

    set _coporateName(value) {
        if (value == undefined || value == '') {
            return this.corporateName = null
        }
        return this.corporateName = value
    }

    get _uniqueIdentifier() {
        return this.uniqueIdentifier
    }

    set _uniqueIdentifier(value) {
        if (value == undefined || value == '') {
            throw new Error('Invalid unique identifier')
        }
        return this.uniqueIdentifier = value
    }

    get _deletionDate() {
        return this.deletionDate
    }

    set _deletionDate(value) {
        if (value == undefined) {
            return this.deletionDate = null
        }
        return this.deletionDate = value
    }


    async insert(data, res, req) {
        const existBranch = await tbBranch.findOne({ where: { [Op.or]: [{[Op.and]: [{CNPJ: data['CNPJ']}, {CNPJ: {[Op.ne]: null}}]}, {[Op.and]: [{branch: data.branch}, {branch: {[Op.ne]: null}}]}, {[Op.and]: [{uniqueIdentifier: data.uniqueIdentifier}, {uniqueIdentifier: {[Op.ne]: null}}]}]}})
      
        if (existBranch) {
            throw new Error('Branch already exist')
        }

        await tbBranch.create(data)
        AddLog.CreateLog(data.branch, 'Adicionado', 'Adicionado Filial', req)
        res.status(201).json({ successMessage: 'Add successfully' })
    }

    static async selectAll(res) {
        const result = (await tbBranch.findAll({ where: { deletionDate: null } })).map(
            branch => branch.dataValues
        )
        res.status(200).json(result)
    }

    static async selectId(req, res) {
        await tbBranch.findByPk(req).then(
            idBranch => res.status(200).json(idBranch.dataValues)
        )
    }

    async update(req, data, res) {
        const existSector = await tbSector.findOne({ where: { idBranch: req.params.idBranch } })
        const existBranch = await tbBranch.findAll({ where: { [Op.or]: [{[Op.and]: [{CNPJ: data['CNPJ']}, {CNPJ: {[Op.ne]: null}}]}, {[Op.and]: [{branch: data.branch}, {branch: {[Op.ne]: null}}]}, {[Op.and]: [{uniqueIdentifier: data.uniqueIdentifier}, {uniqueIdentifier: {[Op.ne]: null}}]}]}})
      

        if (existSector) {
            throw new Error('Not was possible update, since the branch registered in the sector')
        }

        if (existBranch.find(value => value.dataValues.idBranch != req.params.idBranch)) {
            throw new Error('This branch is already registered: ' + '(' + existBranch.filter(value => value.dataValues.idBranch != req.params.idBranch)
                .map(value => value.dataValues.branch).join(', ').concat(') '))
        }

        const alterBranch = await tbBranch.findByPk(req.params.idBranch)

        alterBranch.idBranch = data.idBranch,
        alterBranch.branch = data.branch
        alterBranch.CNPJ = data.CNPJ,
        alterBranch.corporateName = data.corporateName,
        alterBranch.uniqueIdentifier = data.uniqueIdentifier

        await alterBranch.save()
        AddLog.CreateLog(data.branch, 'Atualizando', 'Atualizando Filial', req)

        res.status(200).json({ successMessage: 'Update successfully' })

    }

    static async inactivate(req, data, res) {
        const dataBranch = await tbBranch.findByPk(req.params.idBranch)
        const countBranchInSector = await tbSector.count({ where: { idBranch: req.params.idBranch } })
        const countBranchInEquipment = await tbEquipment.count({ where: { idBranch: req.params.idBranch } })


        if (countBranchInEquipment > 0) {
            throw new Error('You cannot delete a Filial, as it is registered in the Equipment table')
        }

        if (countBranchInSector > 0) {
            throw new Error('You cannot delete a Filial, as it is registered in the Sector table')
        }

        dataBranch.deletionDate = new Date(data.split('/').reverse().join('-')).toISOString().split('T')[0]

        await dataBranch.save()
        AddLog.CreateLog(dataBranch.dataValues.branch, 'Deletado', 'Deletado Filial', req)
        res.status(200).json({ successMessage: 'Successfully inactivated' })
    }


}

module.exports = Branch;