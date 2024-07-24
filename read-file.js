const fs = require('fs');

fs.readFileSync('nuevo_archivo.txt', 'utf8');
const data = fs.readFileSync('nuevo_archivo.txt', 'utf8');
console.log(data);