const tbContact = require('../constant/tbContact')
const AddLog = require('../constant/addLog')

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
    deletionDate

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
        this._deletionDate = data.deletionDate
    }

    get _idContact() {
        return this.idContact
    }

    set _idContact(value) {
        if(value == undefined) {
            return this.idContact = 0
        }
        return this.idContact = value
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
        if(value == undefined) {
            return this.email = null

        } else if(!value.match(/^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
            throw new Error('Email is not valid')

        } else{
            return this.email = value
        } 
        
    }

    get _telephone() {
        return this.telephone
    }

    set _telephone(value) {
        if(value == undefined) {
           return this.telephone = null
        }
        return this.telephone = value
    }

    get _cellPhone() {
        return this.cellPhone
    }

    set _cellPhone(value) {
        if(value == undefined) {
            return this.cellPhone = null
        }
        return this.cellPhone = value
    }

    get _address() {
        return this.address
    }

    set _address(value) {
        if(value == undefined) {
            return this.address = null
        }
        return this.address = value
    }

    get _number() {
        return this.number
    }

    set _number(value) {
        if(value == undefined) {
            return this.number = null
        }
        return this.number = value
    }

    get _zipCode() {
        return this.zipCode
    }

    set _zipCode(value) {
        if(value == undefined) {
            return this.zipCode = null
        }
        return this.zipCode = value
    }

    get _state() {
        return this.state
    }

    set _state(value) {
        if(value == undefined) {
            return this.state = null
        }
        return this.state = value
    }

    get _county() {
        return this.county
    }

    set _county(value) {
        if(value == undefined) {
            return this.county = null
        }
        return this.county = value
    }

    get _district() {
        return this.district
    }

    set _district(value) {
        if(value == undefined) {
            return this.district = null
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

    get _deletionDate() {
        return this.deletionDate
    }

    set _deletionDate(value) {
        if(value == undefined) {
            return this.deletionDate = null
        }
        return this.deletionDate = value
    }

    async insertContact(data, res, req) {
        const existContact = await tbContact.findOne({where: {contact: data.contact}})
        if(existContact) {
            throw new Error('exist already contact')
        }
        await tbContact.create(data)
        AddLog.CreateLog(data.contact, 'Adicionado', 'Adicionado contato', req)
        res.json({message: 'Add successfully'})
    }

    static async selectAllContact(res) {
        const allContact = (await tbContact.findAll({where: {deletionDate: null}})).map(
            result => result.dataValues
        )
        res.json(allContact)
    }

    static async selectContact(req, res) {
        await tbContact.findByPk(req).then(
            contact => res.json(contact.dataValues)
        )
    }

    async updateContact(data, req, res) {
        const contactId = await tbContact.findByPk(req.params.id)

        contactId.contact = data.contact
        contactId.email = data.email
        contactId.telephone = data.telephone
        contactId.cellPhone = data.cellPhone
        contactId.address = data.address
        contactId.number = data.number
        contactId.zipCode = data.zipCode
        contactId.state = data.state
        contactId.county = data.county
        contactId.district = data.district
        contactId.idSupplier = data.idSupplier
        contactId.deletionDate = data.deletionDate

        await contactId.save()
        AddLog.CreateLog(data.contact, 'Atualizada', 'Atualizado contato', req)
        res.json({message: 'Updated successfully'})
    }

    static async inactivateContact(req, data, res) {
        const dataContact = await tbContact.findByPk(req.params.idContact)
       
        dataContact.deletionDate = new Date(data.split('/').reverse().join('-')).toISOString().split('T')[0]
       
        await dataContact.save()
        AddLog.CreateLog(dataContact.dataValues.contact, 'Deletado', 'Deletado contato', req)
        res.json({message: 'Successfully inactivated'})
    } 
    
}


module.exports = Contact