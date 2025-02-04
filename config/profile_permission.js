function profile_permission() {

    let contador = 1, idProfile = 0
    let allow = false
    let arrayPermission = []

    for (let idPermission_profile = 1; idPermission_profile <= 92; idPermission_profile++) {
        let idPermission

        idPermission = contador

        let array = [0,5,9,14,18,22,26,43]

        if (contador >= 46) {
            contador = 0
        }

        if (idPermission_profile >= 47) {
            idProfile = 1
        }
        if (idProfile == 0) {
            allow = true
        }
        let b = 0
        if (idProfile == 1) {
            for (let a = 0; a <= array.length; a++) {
                if (array.find(iten => iten == idPermission)) {
                    b++
                    if (b > 0) {
                        allow = true
                        break
                    } else {
                        allow = false

                    }

                } else {
                    b = 0
                    allow = false
                }
            }
        }

        let d = {
            "idPermission_profile": idPermission_profile,
            "idProfile": idProfile,
            "idPermission": idPermission,
            "allow": allow
        }
        arrayPermission.push(d)


        contador++
    }

    return arrayPermission
}

module.exports = {profile_permission}