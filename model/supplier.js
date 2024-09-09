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
}

module.exports = Supplier;