var log = require('./');
var fs = require('fs');

fs.readFile('LICENSE', log('Success!', 'Error :<'));

Promise.reject(new Error('Rawr!')).catch(log('Hello world'));

fs.access('/aaaaaaaaa', log('This no log'));

fs.access('/bbbbbbbbb', log.err('This do log'));
