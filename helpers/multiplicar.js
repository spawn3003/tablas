const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async(base = 5, listar = false, hasta = 10) => {
    try{
        
        let salida = '';
        let consola = '';
        for(let i = 1; i <= hasta; i++){
            salida += `${ base } X ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'X'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }

        if(listar){
            console.log("==================".rainbow);
            console.log(`== ${ colors.green('Tabla del '+base) } ==`);
            console.log("==================".rainbow);
            console.log(consola);
        }

        /*fs.writeFile(`tabla-${ base }.txt`, salida, (err) =>{
            if(err) throw err;
            console.log("Archivo Creado");
        });*/

        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }
} 

module.exports = {
    crearArchivoTabla
}