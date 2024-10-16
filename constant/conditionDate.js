const { Op } = require("sequelize")

const conditionDate = (fieldName, dtInit, dtFinish) => {
    if (dtInit && dtFinish) {
        return {
            [fieldName]: {
                [Op.lte]: new Date(dtInit.split('/').reverse().join('-')).toISOString(),
                [Op.gte]: new Date(dtFinish.split('/').reverse().join('-')).toISOString().split('T')[0] + 'T23:59:59.000Z'
            }
        };
    } else {
        return { [fieldName]: { [Op.is]: null } };
    }
};





module.exports = {conditionDate}