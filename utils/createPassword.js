const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';

function createPassword(length, isNum, isSym) {
    var c = alpha;
    isNum ? (c += numbers) : '';
    isSym ? (c += symbols) : '';
    return c;
}
module.exports = createPassword;