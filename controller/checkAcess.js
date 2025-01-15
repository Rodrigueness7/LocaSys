const Profile_permission = require('../model/Profile_permission');
const { DecryptToken } = require("../constant/decodeToken");

function checkAcess() {
    return async (req, res, next) => {
        try {
            function action() {
                let action
                if (req.method === 'GET') {
                    return action = 'Ler'
                } else if (req.method === 'POST') {
                    return action = 'Adicionar'
                } else if (req.method === 'PUT') {
                    return action = 'Atualizar'
                }
                return action = 'Deletar'
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
}

module.exports = { checkAcess };
