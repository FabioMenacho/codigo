import { gebid, create } from "./utils.js";
import { getCategorias, getVehiculos, postVehiculo } from "./servicios.js";


let categoriasGlobal = [];
const selectCategorias = gebid("selectCategorias");
const contenedorVehiculos = gebid("contenedorVehiculos");
const loading = gebid("loading");

const formVehiculo = gebid("formVehiculo");
const inputPlaca = gebid("inputPlaca");
const selectColor = gebid("selectColor");
const inputFoto = gebid("inputFoto");

formVehiculo.onsubmit = (e) => {
    e.preventDefault();

    // armar el objeto vehiculo para mandarlo a los servicios de post
    let objVehiculo = {
        color: selectColor.value,
        placa: inputPlaca.value,
        foto: inputFoto.value,
        categoria_id: selectCategorias.value,
    };
    activarLoading("Registrando vehículo...");
    postVehiculo(objVehiculo).then((rpta)=>{
        desactivarLoading();
        if(rpta){
            llamarGetVehiculos();
        }else{
            // mostrar una ventana de error
        }
    });
};

const activarLoading = (mensaje) => {
    // Cambiamos su estilo
    loading.style.display = "flex";
    loading.innerText = mensaje;
};

const desactivarLoading = () => {
    loading.style.display = "none";
};

const  llenarVehiculos = (vehiculos) => {

    contenedorVehiculos.innerHTML = "";

vehiculos.forEach((objVehiculo) => {
const colMd4 = create("div");
colMd4.classList.add("col-md-4");

const card = create("div");
card.classList.add("card");

const imagen = create("img");
imagen.classList.add("card-img-top");
imagen.src =  objVehiculo.foto;

const cardBody = create("div");
cardBody.classList.add("card-body");

const titulo = create("h4");
titulo.classList.add("card-title");
titulo.innerText = objVehiculo.placa;

const pColor = create("p");
pColor.classList.add("card-text");
pColor.innerHTML = `<strong>Color: </strong>${objVehiculo.color}`;

const pCategoria = create("p");
pCategoria.classList.add("card-text");

// Buscar en el arreglo global de categorias aquella cuyo id coincida con el id de la categoria actual del vehiculo
let objCategoria = categoriasGlobal.find((objCategoria)=> +objCategoria.id === +objVehiculo.categoria_id);

pCategoria.innerHTML = `<strong>Categoria: </strong>${objCategoria.nombre}`;


const btnAccion = create("button");
btnAccion.classList.add("btn", "btn-primary");
btnAccion.innerText = "Click";

colMd4.append(card);
card.append(imagen);
card.append(cardBody);
cardBody.append(titulo);
cardBody.append(pColor);
cardBody.append(pCategoria);
cardBody.append(btnAccion);

contenedorVehiculos.append(colMd4);

});
};



const llenarCategorias = (categorias) => {
    let options = "";
    categorias.forEach((objCategoria) => {
        options += `<option value="${objCategoria.id}">${objCategoria.nombre}</option>`
    });
    selectCategorias.innerHTML = options;
};



const llamarGetVehiculos = () => {
    activarLoading("Cargando vehículos...");
    getVehiculos().then((vehiculos) => {
        desactivarLoading();
        llenarVehiculos(vehiculos);
    });
};


activarLoading("Cargando categorías...");
// se necesita que getCategorias se haga primero que getVehiculos sino no tendria donde buscar, metemos getVehiculos dentro de getCategorias
getCategorias().then((categorias) => {
    categoriasGlobal = categorias;
    llenarCategorias(categorias);
    desactivarLoading();
    llamarGetVehiculos();

});


