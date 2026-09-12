const tbUser_sectors = require('../constant/tbUsers_sectors')
const tbUser = require('../constant/tbUser')
const tbSector = require('../constant/tbSector')

class Users_sectors {
    idUserSector
    idUser
    idSector

    constructor(data) {
        this._idUserSector = data.idUserSector
        this._idUser = data.idUser
        this._idSector = data.idSector
    }

    get _idUserSector() {
        return this.idUserSector
    }

    set _idUserSector(value) {
        if (value == undefined) {
            return this.idUserSector = 0
        }
        return this.idUserSector = value
    }

    get _idUser() {
        return this.idUser
    }

    set _idUser(value) {
        if (value == undefined) {
            return this.idUser = 0
        }
        return this.idUser = value
    }

    get _idSector() {
        return this.idSector
    }

    set _idSector(value) {
        if (value == undefined) {
            return this.idSector = 0
        }
        return this.idSector = value
    }

    async insert(data) {
        const result = await tbUser_sectors.create(data)
        return result
    }

    static async selectAll (res) {
        const result = (await tbUser_sectors.findAll({ attributes: ['idUserSector', 'idUser', 'idSector'], 
            include : [{ model: tbUser, attributes: ['username'] }, { model: tbSector, attributes: ['sector']}]})).map(
                data => data.dataValues); 

        return res.status(200).json(result)
    }

    static async selectId (id, res) {
        await tbUser_sectors.findByPk(id, {attributes: ['idUserSector', 'idUser', 'idSector'], 
            include : [{ model: tbUser, attributes: ['username'] }, { model: tbSector, attributes: ['sector']}]} ).then(
            data => res.status(200).json(data.dataValues)  
        )
    }

    static async update(data, id) {
        const alterUsers_sectors = await tbUser_sectors.findByPk(id)
        
        alterUsers_sectors.idUser = data.idUser
        alterUsers_sectors.idSector = data.idSector
        await alterUsers_sectors.save()
    }

    static async delete(req, res) {

        (await tbUser_sectors.findByPk(req)).destroy();

        res.status(200).json({ successMessage: "Delete successfully" })
    }
}


module.exports = Users_sectors