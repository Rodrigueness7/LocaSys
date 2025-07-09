const { Op, or } = require('sequelize')

const tbSector = require('../constant/tbSector')
const tbProfile = require('../constant/tbProfile')
const tbEquipment = require('../constant/tbEquipment')
const Profile_permission = require('../model/Profile_permission')
const jwt = require('jsonwebtoken')
const AddLog = require('../constant/addLog')

const {DecryptToken} = require('../constant/decodeToken')
const { changeKeyObejct } = require('../constant/changeKeyObejct')
const tbUser = require('../constant/tbUser')

class User {
    idUser
    firstName
    lastName
    cpf
    username
    password
    confirmationPassword
    email
    confirmationEmail
    idSector
    idProfile
    deletionDate

    constructor(data, req) {
        this._idUser = data.idUser
        this._firstName = data.firstName
        this._lastName = data.lastName
        this._cpf = data.cpf
        this._username = data.username
        this._password = (DecryptToken(req).permission.find(itens => itens == 14) === undefined) ? null : data.password
        this._confirmationPassword = (DecryptToken(req).permission.find(itens => itens == 14) === undefined) ? null : data.confirmationPassword
        this._email = data.email
        this._confirmationEmail = data.confirmationEmail
        this._idSector = data.idSector
        this._idProfile = data.idProfile 
        this._deletionDate = data.deletetionDate
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
        return this.firstName
    }

    set _firstName(value) {
        if(value == undefined) {
            throw new Error('Invalid firstName')
        }
        return this.firstName = value
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
        return this.cpf = value
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
        if(value == null) {
            return this.password = null
        }
        
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

    get _confirmationPassword() {
        return this.confirmationPassword
    }

    set _confirmationPassword(value) {
        if(value !== this._password){
            throw new Error('Password do not match')
        }
        return this.confirmationPassword = value
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

    get _confirmationEmail() {
        return this.confirmationEmail
    }

    set _confirmationEmail(value) {
        if(value !== this._email) {
            throw new Error('Email do not match')
        }
        return this.confirmationEmail = value
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

    get _deletionDate() {
        return this.deletionDate
    }

    set _deletionDate(value) {
        if(value == undefined) {
            return this.deletionDate = null
        }
        return this.deletionDate = value
    }

   async insert(data, username, email, res, req) {
       const existUser = await tbUser.findOne({where: {[Op.or]: [{username}, {email}]}})  
            if(existUser) {
                throw new Error('Username or email already registered')
            }
            await tbUser.create(data)
            AddLog.CreateLog(data.username, 'Adicionado', 'Adicionado usuário', req)
   
            res.json({successMessage: 'Add successfully'})   
    }

    static async selectId(req, res) {
       await tbUser.findByPk(req.params.id, {attributes: ['idUser', 'username', 'firstName', 'lastName', 
            'cpf', 'email', 'password'], include: [{model: tbSector, attributes: ['sector']}, {model: tbProfile, attributes: ['profile']}]}).then(
                idUser => { 
                    if (DecryptToken(req).permission.find(itens => itens == 14) === undefined) {
                            delete idUser.dataValues.password   
                    }
                    res.json(idUser.dataValues)
                }     
            )     
    }

    static async selectAll(res, req) {
      
        const result = (await tbUser.findAll({attributes:['idUser', 'username', 'firstName', 'lastName', 
            'cpf', 'email', 'password', 'deletionDate'],
            include: [{model: tbSector, attributes: ['sector']}, {model: tbProfile, attributes: ['profile']}], where: {deletionDate: null}})).map(
            allUser => allUser.dataValues
        )
        if (DecryptToken(req).permission.find(itens => itens == 14) === undefined) {
            result.map(itens => {
                delete itens.password
            })
        }
       
        res.json(result)
    }

    static async select(data, res) {
        
        let username = data.username? data.username : '%'
        let firstName = data.firstName ? data.firstName : '%'
        let lastName = data.lastName ? data.lastName : '%'
        let email = data.email ? data.email : '%'
       
        const result = (await tbUser.findAll({where: {[Op.and]: [{username: {[Op.like]: username}}, 
            {firstName: {[Op.like]: firstName}},{lastName: {[Op.like]: lastName}}, {email: {[Op.like]: email}}]},
            attributes: ['idUser', 'username', 'firstName', 'lastName', 'cpf','email'],
            include: [{model: tbSector, attributes: ['sector']}, {model: tbProfile, attributes: ['profile']}]})).map(
                users => users.dataValues
            )
            res.json(result)   
    }

    static async login(username, password, res) {

        if (password.length < 8) {
            throw new Error('our password must be at least 8 characters')
        }
        if (password.search(/[a-z]/i) < 0) {
            throw new Error("Your password must contain at least one letter."); 
        }
        if (password.search(/[0-9]/) < 0) {
            throw new Error("Your password must contain at least one digit.");
        }
        if(password.search(/^(?=.*[~`´!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/) < 0) {
            throw new Error('Your password must contain at least one Special symbol')
        }
        
        const existUser = await tbUser.findOne({where: {username: username, password: password}})

        if(!existUser) {
            throw new Error('Username or password invalid')
        }
        let idUser = existUser.dataValues.idUser
        let user = existUser.dataValues.username
        let idProfile = existUser.dataValues.idProfile
        let permission =  (await Profile_permission.selectSection(idProfile)).map(itens => itens.dataValues.idPermission)
        
        const token = jwt.sign({idUser, user, idProfile, permission}, process.env.secret_key, {expiresIn: '24h'}) 

        res.json({successMessage: 'Logged in user', token})  
      
    }

    async update(data, req, res) {
        const existEquipmentUser = await tbEquipment.findOne({where: {idUser: req.params.id}})
       const alterUser = await tbUser.findByPk(req.params.id)
       const existUser = await tbUser.findAll({where: {[Op.or]: [{username: data.username},{email: data.email}]}, attributes:['idUser', 'username']})
        

       if(existUser.find(value => value.dataValues.idUser != req.params.id)) {
            throw new Error('Exist already users registered:' + ' (' + ( existUser.filter(value => value.dataValues.idUser != req.params.id)
            .map(value => value.dataValues.username).join(', ').concat(') ')))
       }

        alterUser.firstName = existEquipmentUser ? alterUser.dataValues.firstName : data.firstName
        alterUser.lastName = existEquipmentUser ? alterUser.dataValues.lastName : data.lastName
        alterUser.cpf = data.cpf
        alterUser.username = existEquipmentUser ? alterUser.dataValues.username : data.username
        alterUser.password = (DecryptToken(req).permission.find(itens => itens == 14) === undefined) ? null : data.password
        alterUser.email = data.email
        alterUser.idSector = existEquipmentUser ? alterUser.dataValues.idSector : data.idSector
        alterUser.idProfile = data.idProfile

        await alterUser.save()
        AddLog.CreateLog(data.username, 'Atualizado', 'Atualizado usuário', req)
        
        if(existEquipmentUser) {
            res.json({successMessageObs: 'Updated with success, but was only updated Cpf, E-mail and Profile, since exist registered of equipments for this user'})
        } else {
            res.json({successMessage:'Update with successfully'})
        }  
    }

    static async inactivate(req, data, res) {
        const dataUser = await tbUser.findByPk(req.params.id)

        dataUser.deletionDate = new Date(data.split('/').reverse().join('-')).toISOString().split('T')[0]

        await dataUser.save()
        AddLog.CreateLog(dataUser.dataValues.username, 'Deletado', 'Deletado usuário', req)
        res.json({successMessage: 'Successfully inactivated'})
    }

}

module.exports = User