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
    mostrarAutos(autos);
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
    filtrarAutos();
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAutos();
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = e.target.value;
    filtrarAutos();
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAutos();
});

const mostrarAutos = (autos) => {
    limpiarHtml();
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
        .filter( filtrarYear )
        .filter( filtrarMinimo )
        .filter( filtrarMaximo )
        .filter( filtrarPuertas )
        .filter( filtrarTransmision )
        .filter( filtrarColor );
    if(resultado.length > 0) {
        mostrarAutos(resultado);
    }else{
        limpiarHtml();
        noResultado();
    }
}

const filtrarMarca =  auto => {
    const { marca: marcaBusqueda } = datosBusqueda;
    if (marcaBusqueda) {
        return auto.marca === marcaBusqueda;
    }
    return auto;
}

const filtrarYear = auto => {
    const { year: yearBusqueda } = datosBusqueda;
    if (yearBusqueda) {
        return auto.year === parseInt(yearBusqueda);
    }
    return auto;
}

const filtrarMinimo = auto => {
    const { minimo: minimoBusqueda } = datosBusqueda;
    if (minimoBusqueda) {
        return auto.precio >= parseInt(minimoBusqueda);
    }
    return auto;
}

const filtrarMaximo = auto => {
    const { maximo: maximoBusqueda } = datosBusqueda;
    if (maximoBusqueda) {
        return auto.precio <= parseInt(maximoBusqueda);
    }
    return auto;
}

const filtrarPuertas = auto => {
    const { puertas: puertasBusqueda } = datosBusqueda;
    if (puertasBusqueda) {
        return auto.puertas === parseInt(puertasBusqueda);
    }
    return auto;
}

const filtrarTransmision = auto => {
    const { transmision: transmisionBusqueda } = datosBusqueda;
    if (transmisionBusqueda) {
        return auto.transmision === transmisionBusqueda;
    }
    return auto;
}

const filtrarColor = auto => {
    const { color: colorBusqueda } = datosBusqueda;
    if (colorBusqueda) {
        return auto.color === colorBusqueda;
    }
    return auto;
}

const noResultado = () => {
    const autoHTML = document.createElement('div');
    autoHTML.classList.add('alerta', 'error');
    autoHTML.textContent = `
        No hay autos que coincidan con los criterios de b??squeda
    `;
    resultado.appendChild(autoHTML);
}

const limpiarHtml = () => {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}