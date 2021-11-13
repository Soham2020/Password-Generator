const prgm = require('commander');
prgm.version('1.0.0').description('Password Generator');

prgm
.option('-l, --length <number>', 'length of the password', '0')
.option('-s, --save', 'save password to passwords.txt')
.option('-nn, --no-number', 'remove numbers')
.option('-ns, --no-symbol', 'remove symbols')
.parse();

const { length, save, number, symbol } = prgm.opts();
console.log(length, number, symbol);