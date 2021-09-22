const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base, listar, hasta) => {

        try {
            
            let salida = '';
            let consola = '';
            for (i = 1; i <= hasta; i++) {

                salida += `${base} x ${i} = ${i * base}\n`
                consola += `${base} ${'x'.green} ${i} ${'='.red} ${i * base}\n`
            }
            if (listar === true){

                console.log('===================='.blue);
                console.log('Tabla del: '.green, base);
                console.log('===================='.blue);

    
                console.log(consola)
                console.log('===================='.blue);
                
            }
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            return `Se guardo correctamente la tabla del ${base}`;

        } catch (err) {
            throw err;
        }
       
};

module.exports = {
    crearArchivo
}