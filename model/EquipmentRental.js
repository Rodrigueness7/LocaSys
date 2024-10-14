
class EquipmentRental {
    codProd
    proposal
    description
    init
    finish
    entry
    output
    value

    constructor(data) {
        this._codProd = data.codProd
        this._proposal = data.proposal
        this._description = data.description
        this._init = data.init
        this._finish = data.finish 
        this._entry = data.entry
        this._output = data.output
        this._value = data.value
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

    get _proposal() {
        return this.proposal
    }

    set _proposal(value) {
        if(value == undefined) {
            throw new Error('Invalid proposal')
        }
        return this.proposal = value
    }

    get _description() {
        return this.description 
    }

    set _description(value) {
        if(value == undefined) {
            throw new Error('Invalid description')
        }
        return this.description = value
    }

    get _init() {
        return this.init
    }

    set _init(value) {
        if(value == undefined) {
            return this.init = null
        }
        return this.init = new Date(value.split('/').reverse().join('-'))
    }

    get _finish() {
       return this.finish
    }

    set _finish(value) {
        if(value == undefined) {
            return this.finish = null
        }
        return this.finish = new Date(value.split('/').reverse().join('-'))
    }

    get _entry() {
        return this.entry 
    }

    set _entry(value) {
        if(value == undefined) {
            return this.entry = null
        }
        return this.entry = new Date(value.split('/').reverse().join('-'))
    }

    get _output() {
        return this.output 
    }

    set _output(value) {
        if(value == undefined) {
            return this.output = null
        }
        return this.output = new Date(value.split('/').reverse().join('-'))
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

     insertEquipmentRental(data) {
        console.log(data)
    }
}

module.exports = EquipmentRental