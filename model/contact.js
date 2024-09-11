const tbContact = require('../constant/tbContact')

class Contact {

    idContact
    contact
    email
    telephone
    cellPhone
    address
    number
    zipCode
    state
    county
    district
    idSupplier

    constructor(data) {
        this._idContact = data.idContact
        this._contact = data.contact
        this._email = data.email
        this._telephone = data.telephone
        this._cellPhone = data.telephone
        this._address = data.address
        this._number = data.number
        this._zipCode = data.zipCode
        this._state = data.state
        this._county = data.county
        this._district = data.district
        this._idSupplier = data.idSupplier
    }

    get _idContact() {
        return this.idContact
    }

    set _idContact(value) {
        if(value == undefined) {
            return this.contact = 0
        }
        return this.contact = value
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

    get _email() {
        return this.email
    }

    set _email(value) {
        if(!value.match(/^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
            throw new Error('Email is not valid')
        }
        return this.email = value
    }

    get _telephone() {
        return this.telephone
    }

    set _telephone(value) {
        if(value == undefined) {
            throw new Error('Invalid telephone')
        }
        return this.telephone = value
    }

    get _cellPhone() {
        return this.cellPhone
    }

    set _cellPhone(value) {
        if(value == undefined) {
            throw new Error('Invalid cellPhone')
        }
        return this.cellPhone = value
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

    get _number() {
        return this.number
    }

    set _number(value) {
        if(value == undefined) {
            throw new Error('Invalid number')
        }
        return this.number = value
    }

    get _zipCode() {
        return this.zipCode
    }

    set _zipCode(value) {
        if(value == undefined) {
            throw new Error('Invalid number')
        }
        return this.number = value
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

    get _county() {
        return this.county
    }

    set _county(value) {
        if(value == undefined) {
            throw new Error('Invalid county')
        }
        return this.county = value
    }

    get _district() {
        return this.district
    }

    set _district(value) {
        if(value == undefined) {
            throw new Error('Invalid district')
        }
        return this.district = value
    }

    get _idSupplier() {
        return this.idSupplier
    }

    set _idSupplier(value) {
        if(value == undefined) {
            throw new Error('Invalid idSupplier')
        }
        return this.idSupplier = value
    }
}

module.exports = Contact