const argv = require('yargs')

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla'
    })

    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'El limite hasta donde se imprime la tabla'
    })

    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Imprime en consola la tabla'
    })

    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un numero'
        }

        return true;
    })
    .argv

module.exports = argv;