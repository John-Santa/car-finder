const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

const datosBusqueda = {
    marca: '',
    modelo: '',
    year: '',
    puertas: '',
    transmision: '',
    minimo: '',
    maximo: '',
    color: ''
}

document.addEventListener('DOMContentLoaded', function() {
    mostrarAutos();
    cargarYear();
});

marca.addEventListener('change', (e) => {
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = e.target.value;
    filtrarAutos();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
});

const mostrarAutos = () => {
    autos.forEach( ({ marca, modelo, year, puertas, transmision, precio, color }) => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmision ${transmision} - ${precio} - ${color}
        `;
        resultado.appendChild(autoHTML);
    });
}

const cargarYear = () => {
    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        year.appendChild(option);
    }
}

const filtrarAutos = () => {
    const resultado = autos
        .filter( filtrarMarca )
        .filter( filtrarYear );
    console.log(resultado);
}

const filtrarMarca = ({marca}) => {
    const { marca: marcaBusqueda } = datosBusqueda;
    if (marcaBusqueda) {
        return marca === marcaBusqueda;
    }
    return auto;
}

const filtrarYear = ({year}) => {
    const { year: yearBusqueda } = datosBusqueda;
    if (yearBusqueda) {
        return year === parseInt(yearBusqueda);
    }
    return auto;
}