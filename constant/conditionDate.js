const { Op } = require("sequelize")


const conditionDate = (fieldName, dtInit, dtFinish) => {
    if (dtInit && dtFinish) {
        return {
            [fieldName]: {
                [Op.gte]: new Date(dtInit.split('/').reverse().join('-')).toISOString(),
                [Op.lte]: new Date(dtFinish.split('/').reverse().join('-')).toISOString().split('T')[0] + 'T23:59:59.000Z'
            }
        };
    } else {
        return {
            [Op.or]: [
                { [fieldName]: null },   
                { [fieldName]: { [Op.ne]: null } } 
            ]
        };
    }
};

module.exports = {conditionDate}