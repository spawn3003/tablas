
const { crearArchivoTabla } = require('./helpers/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();
//console.log(process.argv);
//console.log(argv);

//const [ , ,arg3 = 'base=5'] = process.argv;
//const [ , base = 5] = arg3.split('=');

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado.') )
    .catch( err => console.log(err) );
