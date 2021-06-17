import { getClimaByCiudad } from "./servicios.js";
import { gebid } from "./utils.js";


const URL_ICONS = "http://openweathermap.org/img/wn/";

const formBusqueda = gebid("formBusqueda");
const inputBusqueda = gebid("inputBusqueda");
const cardsContainer = gebid("cardsContainer");

const mapa = L.map("mapid").setView([-16.4078636, -71.534219], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmFiaW9tZW5hY2hvbGFuZGEiLCJhIjoiY2tweXJhM3JmMDF2bzJ1bnRzdnIybHA2MiJ9.ZOdJi2YahnXJp3QdmUfFHQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZmFiaW9tZW5hY2hvbGFuZGEiLCJhIjoiY2tweXJhM3JmMDF2bzJ1bnRzdnIybHA2MiJ9.ZOdJi2YahnXJp3QdmUfFHQ'
}).addTo(mapa);


let marcador = L.marker([0,0]);

const ctx = gebid('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [],
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


const actualizarGrafico = (climas) => {
// crear un arreglo de labels
let ejeX = climas.map((clima)=>{
    let fecha = new Date(clima.dt*1000);
    let formatoFecha = `${fecha
        .getDate()
        .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}-${(
        fecha.getMonth() + 1
    ).toLocaleString('es-ES', {
        minimumIntegerDigits: 2
    })}-${fecha.getFullYear()} ${fecha
        .getHours()
        .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}:${fecha
        .getMinutes()
        .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}:${fecha
        .getSeconds()
        .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}`;
        return formatoFecha;
});

// crear un arreglo de valores para las labels
let ejeY = climas.map((clima)=>{
    return clima.main.temp;
});

// estoy colocando los arreglos en el chart
myChart.data.labels = ejeX;
myChart.data.datasets[0].data = ejeY;
myChart.update();

};



const llenarCards = (climas) => {
    let cardsString ="";
climas.forEach ((clima) => {

    let fecha = new Date(clima.dt*1000);
    let formatoFecha = `${fecha
        .getDate()
        .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}-${(
        fecha.getMonth() + 1
    ).toLocaleString('es-ES', {
        minimumIntegerDigits: 2
    })}-${fecha.getFullYear()} ${fecha
        .getHours()
        .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}:${fecha
        .getMinutes()
        .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}:${fecha
        .getSeconds()
        .toLocaleString('es-ES', { minimumIntegerDigits: 2 })}`;

    cardsString += `
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body d-flex">
                            <figure>
                                <img src="${URL_ICONS}${clima.weather[0].icon}@4x.png" alt="" class="icono-clima" />
                            </figure>
                            <div class="card__info w-100 text-center">
                                <h3 class="display-4">${clima.main.temp} °C</h3>
                                <p class="card-text text-muted">${formatoFecha}</p>
                            </div>
                        </div>
                    </div>
                    `
});
cardsContainer.innerHTML = cardsString;
console.log(climas);
};


const actualizarMapa = (lat,lon) => {
    marcador.setLatLng([lat,lon]).addTo(mapa);
    mapa.panTo([lat,lon]);
};



formBusqueda.onsubmit = (e) => {
    e.preventDefault();
    getClimaByCiudad(inputBusqueda.value).then((rpta)=>{
        if(+rpta.cod === 200){
            llenarCards(rpta.list);
            actualizarGrafico(rpta.list);
            actualizarMapa(rpta.city.coord.lat,rpta.city.coord.lon);
        }else {
            // Lanzar mensaje de error
            Swal.fire({
                icon: 'error',
                title: 'Ups...',
                text: 'No se encontró ciudad',                
              })
        };
    });
};

