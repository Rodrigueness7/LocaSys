const path = require('path')
const {exec} = require('child_process')

function dbMigrate() {
    const databasePath = path.resolve(__dirname, '../database')

    exec('npx sequelize-cli db:migrate', {cwd: databasePath}, (error, stdout, stderr) => {
        if(error) {
            console.log(error);
            return;
        }

        if(stderr) {
            console.log(stderr);
            return;
        }

        console.log(stdout);

    })
}

module.exports = { dbMigrate}