const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

function createPassword(length, isNum, isSym) {
    var c = alpha;
    isNum ? (c += numbers) : '';
    isSym ? (c += symbols) : '';
    let pass = '';
    for(let i=0; i<length; i++)
        pass += c.charAt(Math.floor(Math.random() * c.length));
    return pass;
}
module.exports = createPassword;