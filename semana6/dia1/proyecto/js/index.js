// Importar desde data.js
import { peliculas } from "./data.js";
// console.log(peliculas);

// Capturar al contenedor
const contenedor = document.getElementById("contenedor");
const spanNombrePelicula = document.getElementById("spanNombrePelicula");
const staticBackdrop = document.getElementById("staticBackdrop");
const modalPelicula = new bootstrap.Modal(staticBackdrop);
const contenedorCarousel = document.getElementById("contenedorCarousel");


const base_url_imagenes = "https://image.tmdb.org/t/p/w500";

const dibujarCarousel = () => {

    peliculas.forEach ((objPelicula) => {
        let carouselCell = document.createElement("div");
        carouselCell.classList.add("carousel-cell");

        carouselCell.innerHTML = `<div class="card" style="width: 18rem">
        <img src="${base_url_imagenes}${objPelicula.backdrop_path}" class="card-img-top" />
        <div class="card-body">
        <h5 class="card-title">${objPelicula.title}</h5>
        <p class="card-text">${objPelicula.overview.substr(0,20)}</p>
        </div>
      </div>`;
      
      contenedorCarousel.append(carouselCell);
    });  
    
    let flkty = new Flickity(contenedorCarousel,{
        cellAlign: "left",
        contain: true,
    });
};
dibujarCarousel();



const abrirModal = (objPelicula) => {
    spanNombrePelicula.innerText = objPelicula.title;
    modalPelicula.show();
}

const dibujarPeliculas = () => {
    peliculas.forEach((objPelicula) => {
        let col = document.createElement("div");
        col.classList.add("col-md-3", "mb-3");

        let card = document.createElement("div");
        card.classList.add("card", "shadow", "h-100");
        let smallText = "";
        // asigno un valor a smallText
        if (objPelicula.adult === true) {
            smallText = `<small class="text-danger">+18 años</small>`
        } else {
            smallText = `<small class="text-success">Apta para todos</small>`
        };

        card.innerHTML = `<img
                            src="${base_url_imagenes}${objPelicula.poster_path}"
                            alt="foto de la película"
                            class="card-img-top"
                        />
                        <div class="card-body">
                            <h4 class="card-title">${objPelicula.title}</h4>
                            <p class="card-text">
                            ${objPelicula.overview.substr(0,90)}...
                            </p>
                            <p class="card-text">
                            ${smallText}
                            </p>
                        </div>`;

        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        let buttonOpenModal = document.createElement("button");
        buttonOpenModal.classList.add("btn", "btn-outline-primary");
        buttonOpenModal.innerText = "Ver más...";
        buttonOpenModal.onclick = () => {
            abrirModal(objPelicula);
        };

        cardFooter.append(buttonOpenModal);

        card.append(cardFooter);

        col.append(card);

        contenedor.append(col);

    });
};
dibujarPeliculas();