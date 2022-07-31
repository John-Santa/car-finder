const resultado = document.querySelector('#resultado');
const year = document.querySelector('#year');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;


document.addEventListener('DOMContentLoaded', function() {
    mostrarAutos();
    cargarYear();
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
