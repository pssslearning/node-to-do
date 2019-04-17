const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

console.log(argv);



switch (comando) {

    case 'crear':
        console.log('Crear nueva entrada de TO-DO');
        let resultado = porHacer.crear(argv.descripcion);
        if (resultado)
            console.log(`La tarea con descripción '${argv.descripcion}' se ha INCLUIDO satisfactoriamente.`.green);
        else
            console.log(`Ya existe una tarea con descripción '${argv.descripcion}'. La operación de CREAR NO SE HA REALIZADO`.bgYellow.red);
        break;

    case 'listar':

        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('------ Por Hacer -------------------------------'.green);
            console.log('Descripción: ', tarea.descripcion.yellow);
            console.log('Completada.: ', (tarea.completada ? 'SI' : 'NO').yellow);
            console.log("------------------------------------------------\n");
        }

        break;

    case 'actualizar':

        if (argv.completada === 'false') argv.completada = false;
        if (argv.completada === 'true') argv.completada = true;

        if (porHacer.actualizar(argv.descripcion, argv.completada))
            console.log(`La tarea con descripción '${argv.descripcion}' se ha actualizado a estado '${argv.completada}'.`.green);
        else
            console.log(`No existe ninguna tarea con descripción '${argv.descripcion}'. La operación de ACTUALIZAR NO SE HA REALIZADO`.bgYellow.red);
        break;

    case 'eliminar':

        if (porHacer.eliminar(argv.descripcion))
            console.log(`La tarea con descripción '${argv.descripcion}' se ha ELIMINADO satisfactoriamente'.`.green);
        else
            console.log(`No existe ninguna tarea con descripción '${argv.descripcion}'. La operación de ELIMINAR NO SE HA REALIZADO`.bgYellow.red);
        break;

    default:
        console.log(`Comando ${comando} DESCONOCIDO`);
        break;


}