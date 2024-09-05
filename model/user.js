const { Op } = require('sequelize')
const tbUser = require('../constant/tbUser')

class User {
    idUser
    fisrtName
    lastName
    cpf
    username
    password
    email
    idSector
    idProfile

    constructor(data) {
        this._idUser = data.idUser
        this._fisrtName = data.fisrtName
        this._lastName = data.lastName
        this._cpf = data.cpf
        this._username = data.username
        this._password = data.password
        this._email = data.email
        this._idSector = data.idSector
        this._idProfile = data.idProfile 
    }

    get _idUser() {
        return this.idUser
    }

    set _idUser(value) {
        if(value == undefined) {
            return this.idUser = 0
        }
        return this.idUser = value
    }

    get _firstName() {
        return this.fisrtName
    }

    set _firstName(value) {
        if(value == undefined) {
            throw new Error('Invalid firstName')
        }
        return this.fisrtName = value
    }

    get _lastName() {
        return this.lastName
    }

    set _lastName(value) {
        if(value == undefined) {
            throw new Error('Invalid lastname')
        }
        return this.lastName = value
    }

    get _cpf() {
        return this.cpf
    }

    set _cpf(value) {
        if(value == undefined) {
            throw new Error('Invalid cpf')
        }
        return this._cpf = value
    }

    get _username() {
        return this.username
    }

    set _username(value) {
        if(value == undefined) {
            throw new Error('Invalid user')
        }
        return this.username = value
    }

    get _password() {
        return this.password
    }

    set _password(value) {
        
        if (value.length < 8) {
            throw new Error('our password must be at least 8 characters')
        }
        if (value.search(/[a-z]/i) < 0) {
            throw new Error("Your password must contain at least one letter."); 
        }
        if (value.search(/[0-9]/) < 0) {
            throw new Error("Your password must contain at least one digit.");
        }
        if(value.search(/^(?=.*[~`´!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/) < 0) {
            throw new Error('Your password must contain at least one Special symbol')
        }
        return this.password = value
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

    get _idSector() {
        return this.idSector
    }

    set _idSector(value) {
        if(value == undefined) {
            throw new Error('Invalid idSector')
        }
        return this.idSector = value
    }

    get _idProfile() {
        return this.idProfile
    }

    set _idProfile(value) {
        if(value == undefined) {
            throw new Error('Invalid idProfile')
        }
        return this.idProfile = value
    }

   async insertUser(data, username, email, res) {
       const existUser = await tbUser.findOne({where: {[Op.or]: [{username}, {email}]}})  
            if(existUser) {
                throw new Error('User already exist')
            }
            await tbUser.create(data)
            res.json({message: 'Add successfully'})
      
       
       
    }
}

module.exports = User