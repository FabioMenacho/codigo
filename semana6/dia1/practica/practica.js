
import { peliculas } from "./practica-data.js";
// console.log(peliculas);

const base_url_imagenes = "https://image.tmdb.org/t/p/w500";

const contenedor = document.getElementById("contenedor");
const spanNombrePelicula = document.getElementById("spanNombrePelicula");
const staticBackdrop = document.getElementById("staticBackdrop");
const modalPelicula = new bootstrap.Modal(staticBackdrop);
const contenedorCarousel = document.getElementById("contenedorCarousel");

const dibujarCarousel = () => {

    peliculas.forEach((objPelicula) => {
        let carouselCell = document.createElement("div");
        carouselCell.classList.add("carousel-cell");

        carouselCell.innerHTML = `
        <div class="card" style="width: 18rem">
        <img src="${base_url_imagenes}${objPelicula.backdrop_path}" class="card-img-top" />
        <div class="card-body">
        <h5 class="card-title">${objPelicula.title}</h5>
        <p class="card-text">${objPelicula.overview.substr(0,20)}</p>
        </div>   
        </div>
        `;

        contenedorCarousel.append(carouselCell);

    });

    var flkty = new Flickity( contenedorCarousel, {
        cellAlign: 'left',
        contain: true
    });
};
dibujarCarousel();

const abrirModal = (objPelicula) => {
    spanNombrePelicula.innerText = objPelicula.title;
    modalPelicula.show();
};

const dibujarPeliculas = () => {
    peliculas.forEach((objPelicula) => {
        let col = document.createElement("div");
        col.classList.add("col-md-3", "mb-3");

        let card = document.createElement("div");
        card.classList.add("card", "shadow");

        let smallText = "";
        if(objPelicula.adult===true){
            smallText = `<small class="text-danger">+18 años</small>`;
        } else {
            smallText = `<small class="text-success">Apto para todos</small>`
        };

        card.innerHTML = `
                            <img src="${base_url_imagenes}${objPelicula.poster_path}" class="card-img-top" alt="poster de la película">
                            <div class="card-body">
                            <h5 class="card-title">${objPelicula.title}</h5>
                            <p class="card-text">${objPelicula.overview.substr(0,90)}...</p>
                            <p class="card-text">
                                ${smallText}
                            </p>                      
                            </div>
                        `;

        let cardFooter = document.createElement("div");
        cardFooter.classList.add("card-footer");

        let buttonOpenModal = document.createElement("button");
        buttonOpenModal.classList.add("btn", "btn-outline-primary");
        buttonOpenModal.innerText = "Ver más...";
        buttonOpenModal.onclick = () => {
            abrirModal(objPelicula);
        };

        contenedor.append(col);
        col.append(card);
        card.append(cardFooter);
        cardFooter.append(buttonOpenModal);

    });
};
dibujarPeliculas();