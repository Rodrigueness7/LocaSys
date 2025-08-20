const tbSupplier = require('../constant/tbSupplier')
const tbContact = require('../constant/tbContact')
const tbEquipment = require('../constant/tbEquipment')
const AddLog = require('../constant/addLog')

class Supplier {

    idSupplier
    supplier
    email
    contact
    CNPJ
    address
    zipCode
    state
    city
    deletionDate

    constructor(data) {
        this._idSupplier = data.idSupplier
        this._supplier = data.supplier
        this._email = data.email
        this._contact = data.contact
        this._CNPJ = data.CNPJ
        this._address = data.address
        this._zipCode = data.zipCode
        this._state = data.state
        this._city = data.city
        this._deletionDate = data.deletionDate
    }

    get _idSupplier() {
        return this.idSupplier
    }

    set _idSupplier(value) {
        if(value == undefined) {
            return this.idSupplier = 0
        }
        return this.idSupplier = value
    }

    get _supplier() {
        return this.supplier
    }

    set _supplier(value) {
        if(value == undefined) {
            throw new Error('Invalid supplier')
        }
        return this.supplier = value
    }

    get _email() {
        return this.email
    }

    set _email(value) {
        if(!value.match(/^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
            throw new Error('Email is not valid')
        }
        return this.email = value
    }

    get _contact() {
        return this.contact  
    }

    set _contact(value) {
        if(value == undefined) {
            throw new Error('Invalid contact')
        }
        return this.contact = value
    }

    get _CNPJ() {
        return this.CNPJ
    }

    set _CNPJ(value) {
        if(value == undefined) {
            throw new Error('Invalid CNPJ')
        }
        return this.CNPJ = value
    }

    get _address() {
        return this.address
    }

    set _address(value) {
        if(value == undefined) {
            throw new Error('Invalid address')
        }
        return this.address = value
    }

    get _zipCode() {
        return this.zipCode
    }

    set _zipCode(value) {
        if(value == undefined) {
            throw new Error('Invalid zipCode')
        }
        return this.zipCode = value
    }

    get _state() {
        return this.state
    }

    set _state(value) {
        if(value == undefined) {
            throw new Error('Invalid state')
        }
        return this.state = value
    }

    get _city() {
        return this.city
    }

    set _city(value) {
        if(value == undefined) { 
            throw new Error('Invalid city')
        }
        return this.city = value    
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

    async insert(data, res, req) {
        const existSupplier = await tbSupplier.findOne({where: {supplier: data.supplier} })

        if(existSupplier) {
            throw new Error('Exist already supplier')
        }
        await tbSupplier.create(data)
        AddLog.CreateLog(data.supplier, 'Adicionado', 'Adicionado Fornecedor', req)
        res.status(201).json({successMessage: 'Add successufully'})
    }

    static async selectAll(res) {
        const result = (await tbSupplier.findAll({where: {deletionDate: null}})).map(
            allSupplier => allSupplier.dataValues 
        )
        res.status(200).json(result)
    }

    static async select(req, res) {
        await tbSupplier.findByPk(req).then(
            supplier => {
                res.status(200).json(supplier.dataValues)
            }
        )
    }

    async update(data, req, res) {
        const existSupplier =  await tbSupplier.findAll({where: {CNPJ: data['CNPJ']}})
        const existEquipmentSupplier = await tbEquipment.findOne({where: {idSupplier: req.params.id}})
        const existContact = await tbContact.findOne({where: {idSupplier: req.params.id}})

        if(existSupplier.find(value => value.dataValues.idSupplier != req.params.id)) {
            throw new Error('Exist already supplier registered:' + ' (' + ( existSupplier.filter(value => value.dataValues.idSupplier != req.params.id)
            .map(value => value.dataValues.supplier).join(', ').concat(') ')))
       }
        const alterSupplier = await tbSupplier.findByPk(req.params.id)

        alterSupplier.supplier = data.supplier
        alterSupplier.email = data.email
        alterSupplier.contact = data.contact
        alterSupplier.CNPJ = existEquipmentSupplier ? alterSupplier.dataValues['CNPJ'] : data['CNPJ']
        alterSupplier.address = data.address
        alterSupplier.zipCode = data.zipCode
        alterSupplier.state = data.state
        alterSupplier.city = data.city

        await alterSupplier.save()
        AddLog.CreateLog(data.supplier, 'Atualizado', 'Atualizado Fornecedor', req)

       if(existEquipmentSupplier || existContact) {
        res.status(200).json({successMessageObs: 'Successful update - the CNPJ was not changed because equipment was already registered for this supplier .'})
        
       } else {
        res.status(200).json({successMessage: 'Update success'})
       }
       
    }

    static async inactivate(req, data, res) {
       const dataSupplier = await tbSupplier.findByPk(req.params.idSupplier)
       const countSupplierInContact = await tbContact.count({where: {idSupplier: req.params.idSupplier}}) 
       const countSupplierInEquipment = await tbEquipment.count({where: {idSupplier: req.params.idSupplier}})

       if(countSupplierInContact > 0) {
            throw new Error('You cannot delete a Supplier, as it is registered in the Contact table')
       }

       if(countSupplierInEquipment > 0) {
            throw new Error('You cannot delete a Supplier, as it is registered in the Equipment table')
       }
 
       dataSupplier.deletionDate = new Date(data.split('/').reverse().join('-')).toISOString().split('T')[0]

       await dataSupplier.save() 
       AddLog.CreateLog(dataSupplier.dataValues.supplier, 'Deletado', 'Deletado Fornecedor', req)
       res.status(200).json({successMessage: 'Successfully inactivated'})
    }
}

module.exports = Supplier;