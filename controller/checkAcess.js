const Profile_permission = require('../model/Profile_permission');
const { DecryptToken } = require("../constant/decodeToken");

 function checkAcess (section) {
   return async (req, res, next) => {
    try {
        function action() {
        switch(req.method) {
            case 'GET':
                return 'Ler';
            case 'POST':
                return 'Gravar';
            case 'PUT':
                return 'Atualizar';
            case 'DELETE':
                return 'Deletar';
            default:
                return 'Unsupported method'                
        }
        }

        const profileId = DecryptToken(req).idProfile;
        const permissions = await Profile_permission.select(profileId, action(), section);

        if (permissions.dataValues.allow !== true) {
            throw new Error('Usuário sem permissão')   
        }
        next();
    } catch (error) {
        res.json({ message: error.message });
    }
   }
};

module.exports = { checkAcess };
