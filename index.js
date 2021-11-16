#!/usr/bin/env node
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');
const prgm = require('commander');
const chalk = require('chalky')
prgm.version('1.0.0').description('Password Generator');

prgm
.option('-l, --length <number>', 'length of the password', '10')
.option('-s, --save', 'save password to passwords.txt')
.option('-nn, --no-number', 'remove numbers')
.option('-ns, --no-symbol', 'remove symbols')
.parse();

const { length, save, number, symbol } = prgm.opts();

const genPass = createPassword(length, number, symbol);
console.log(chalk.green('Generated Password:: ') + chalk.bold(genPass));

if(save){
    savePassword(genPass);
}