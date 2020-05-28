const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async(direccion) => {
    /*
    const fail = `No se pudo determinar el climad de ${direccion}`;
    const coordenadas = await lugar.getLugarLatLng(direccion).then(resp => {
        return resp;
    }).catch(err => {
        return false;
    });
    if (coordenadas) {
        return temperatura = clima.getClima(coordenadas.lat, coordenadas.lng).then(resp => {
            return `El clima de ${coordenadas.direccion} es de ${resp}°c`;
        }).catch(err => {
            return fail;
        });
    } else {
        return fail;
    }
    */
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}°c`;
    } catch {
        return `No se pudo determinar el climad de ${direccion}`;
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);
//lugar.getLugarLatLng(argv.direccion).then(console.log);
//clima.getClima(40.750000, -74.000000).then(console.log).catch(console.log);