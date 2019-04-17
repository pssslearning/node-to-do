const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción (e identificador) de la tarea TO-DO'
    }
}

const completada = {
    default: true,
    type: Boolean,
    alias: 'c',
    desc: 'Flag/Indicador que marca la tarea TO-DO como completada'
}

const argv = require('yargs')
    .command(
        'listar',
        'Listar todas las entradas existentes de tareas TO-DO'
    )
    .command(
        'crear',
        'Crear una nueva entrada de TO-DO', descripcion
    )
    .command(
        'actualizar',
        'Actualiza el estado completado de una entrada TO-DO', {
            descripcion,
            completada
        }
    )
    .command(
        'eliminar',
        'Eliminar una entrada de la lista de TO-DOs (localizada por su descripción)', descripcion
    )
    .demandCommand()
    .help()
    .argv;

module.exports = {
    argv
}