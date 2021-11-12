const prgm = require('commander');
prgm.version('1.0.0').description('Password Generator')
prgm.command('generate').action(() => console.log("Generated!!")).parse();