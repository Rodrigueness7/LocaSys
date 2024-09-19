const tbEquipament = require('../constant/tbEquipament')

class Equipament {
    codProd
    equipament
    type
    idUser
    value
    idFilial
    idSector
    idSupplier
    entryDate
    deletionDate

    constructor(data) {
        this._codProd = data.codProd
        this._equipament = data.equipament
        this._type = data.type
        this._idUser = data.idUser
        this._value = data.value
        this._idFilial = data.idFilial
        this._idSector = data.idSector
        this._idSupplier = data.idSupplier
        this._entryDate = data.entryDate
        this._deletionDate = data.deletionDate
    }

    get _codProd() {
        return this.codProd
    }

    set _codProd(value) {
        if(value == undefined) {
            throw new Error('Invalid codProd')
        }
        return this.codProd = value
    }

    get _equipament() {
        return this.equipament
    }

    set _equipament(value) {
        if(value == undefined) {
            throw new Error('Invalid equipament')
        }
        return this.equipament = value
    }

    get _type() {
        return this.type
    }

    set _type(value) {
        if(value == undefined) {
            throw new Error('Invalid type')
        }
        return this.type = value
    }

    get _idUser() {
        return this.idUser
    }

    set _idUser(value) {
        if(value == undefined) {
            throw new Error('Invalid idUser')
        }
        return this.idUser = value
    }

    get _value() {
        return this.value
    }

    set _value(value) {
        if(value == undefined) {
            throw new Error('Invalid value')
        }
        return this.value = value
    }

    get _idFilial() {
        return this.idFilial
    }

    set _idFilial(value) {
        if(value == undefined) {
            throw new Error('Invalid idFilial')
        }
        return this.idFilial = value
    }

    get _idSector() {
        return this.idSector
    }

    set _idSector(value) {
        if(value == undefined) {
            throw new Error('Invalid idSector')
        }
        return this.idSector = value
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

    get _entryDate() {
        return this.entryDate
    }

    set _entryDate(value) {
        if(value == undefined){
            throw new Error('Invalid entryDate')
        }
        return this.entryDate = value
    }

    get _deletionDate() {
        return this.deletionDate
    }

    set _deletionDate(value) {
        if(value == undefined) {
            throw new Error('Invalid deletionDate')
        }
        return this.deletionDate = value
    }

    async insertEquipament(data, res) {
        console.log(data)
        res.json({message: 'OK'})
    }
}

module.exports = Equipament