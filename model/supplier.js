const tbSupplier = require('../constant/tbSupplier')

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

    async insertSupplier(data, res) {
        const existSupplier = await tbSupplier.findOne({where: {supplier: data.supplier} })

        if(existSupplier) {
            throw new Error('Exist already supplier')
        }
        await tbSupplier.create(data)
        res.json({message: 'Add successufully'})
    }

    static async selectAllSupplier(res) {
        const result = (await tbSupplier.findAll()).map(
            allSupplier => allSupplier.dataValues 
        )
        res.json(result)
    }

    static async selectSupplier(req, res) {
        await tbSupplier.findByPk(req).then(
            supplier => {
                res.json(supplier.dataValues)
            }
        )
    }

    async updateSupplier(data, req, res) {
        const supplierId = await tbSupplier.findByPk(req)

        supplierId.supplier = data.supplier
        supplierId.email = data.email
        supplierId.contact = data.contact
        supplierId.CNPJ = data.CNPJ
        supplierId.address = data.address
        supplierId.zipCode = data.zipCode
        supplierId.state = data.state
        supplierId.city = data.city

        await supplierId.save()
        res.json({message: 'Update supplier'})

    }

    static async removeSupplier(req, res) {
        await tbSupplier.findByPk(req).then(
            supplier => supplier.destroy()
        )
        res.json({message: 'Delelte Supplier'})
    }
}

module.exports = Supplier;