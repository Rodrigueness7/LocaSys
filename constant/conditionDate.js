const { Op } = require("sequelize")

const conditionRuturnDate = (dtInit, dtFinish) => {
    if(dtInit || dtFinish ) {
        return { returnDate:{[Op.gte]: new Date(dtInit.split('/').reverse().join('-')).toISOString()}, returnDate: {[Op.lte]: new Date(dtFinish.split('/').reverse().join('-')).toISOString().split('T')[0] + 'T23:59:59.000Z'}}
    } else {
        return [{returnDate: {[Op.ne]: null}}, {returnDate:{[Op.is]: null}}]
    }
}




module.exports = {conditionRuturnDate}