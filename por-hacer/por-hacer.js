const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, 'utf8', (err) => {

        if (err) throw new Error('No se pudo grabar DB', err);

        console.log('DB Persisted');
    })
}


const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }


}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completada: false
    }

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    console.log(index, descripcion);

    if (index >= 0) {
        return false;
    } else {
        listadoPorHacer.push(porHacer);
        guardarDB();
        return true;
    }
}


const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completada = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completada = completada;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}