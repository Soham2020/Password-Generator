const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalky');

function savePass(password) {
    fs.open(path.join(__dirname, '../', 'files.txt'), 'a', 666, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.yellow('Password saved to your local pc:)'))
            })
        })
    })
}

module.exports = savePass;