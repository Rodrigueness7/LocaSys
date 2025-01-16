const Profile_permission = require('../model/Profile_permission');
const { DecryptToken } = require("../constant/decodeToken");

async function checkAcess (req, res, next) {
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
        const permissions = await Profile_permission.selectProfile_permission(profileId, action());

        if (!permissions || !permissions.dataValues) {
            throw new Error('Usuário sem permissão')
        }

        next();
    } catch (error) {
        res.json({ message: error.message });
    }
};

module.exports = { checkAcess };
