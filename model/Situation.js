const tbSituation = require('../constant/tbSituation')

class Situation {
    idSituation
    situation

    constructor(idSituation, situation) {
        this._idSituation = idSituation
        this._situation = situation
    }

    get _idSituation() {
        return this.idSituation
    }

    get _situation() {
        return this.situation
    }



   static async select(res) {
        const result = (await tbSituation.findAll({attributes: ['idSituation', 'situation']})).map(situation => situation.dataValues)
        res.status(200).json({sucessMessage: result})
    }

    static async find(id, res) {
        const result = await tbSituation.findOne({ where: { idSituation: id } })    
        res.status(200).json({sucessMessage: result})
    }


}

module.exports = Situation