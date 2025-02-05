function profile_permission() {

    let contador = 1, idProfile = 1
    let allow = false
    let arrayPermission = []

    for (let idPermission_profile = 1; idPermission_profile <= 94; idPermission_profile++) {
        let idPermission

        idPermission = contador

        let array = [1,6,10,15,19,23,27,44]

        if (contador >= 47) {
            contador = 0
        }

        if (idPermission_profile >= 48) {
            idProfile = 2
        }
        if (idProfile == 1) {
            allow = true
        }
        let b = 0
        if (idProfile == 2) {
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