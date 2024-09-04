const tbUser = require('../constant/tbUser')

class User {
    idUser
    user
    password
    email
    idSector
    idProfile

    constructor(data) {
        this._idUser = data.idUser
        this._user = data.user
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

    get _user() {
        return this.user
    }

    set _user(value) {
        if(value == undefined) {
            throw new Error('Invalid user')
        }
        return this.user = value
    }

    get _password() {
        return this.password
    }

    set _password(value) {
        if(value == undefined) {
            throw new Error('Invalid password')
        }
        return this.password = value
    }

    get _email() {
        return this.email
    }

    set _email(value) {
        if(value == undefined) {
            throw new Error('Invalid email')
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
}

module.exports = User