const Profile_permission = require('../model/Profile_permission')
const { DecryptToken } = require("../constant/decodeToken");

function checkAcess(action) {
     return async (req, res, next) => {
    
        (await Profile_permission.selectProfile_permission(DecryptToken(req).idProfile, action)).map(
            itens => {
                if(!itens.dataValues['Permission'].permission) {
                   res.json({message: 'Usuario sem permissão'})
                   console.log(itens.dataValues['Permission'].permission)
                }  
                next()
            }
         )   
    }
   } 

module.exports = {checkAcess}