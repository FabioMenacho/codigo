
// Clase HTMLElement y sus propiedades y métodos

//elemento.innerText
// SET - GET

// texto interno de la etiqueta 
const parrafo1 = document.querySelector("#parrafo1");

// get: obtengo el texto
console.log(parrafo1.innerText);
// set: cambio el texto
parrafo1.innerText = "Nuevo texto del párrafo"

// elemento.innerHTML
// Análogo al innerText, sin embargo, si colocamos texto con etiquetas, las etiquetas son interpretadas por el DOM

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

// seteando innerText
div1.innerText = "<a href='www.google.com'>Link a Google</a>"
// seteando con innerHTML
div2.innerHTML = "<a href='www.google.com'>Link a Google</a>"

// elemento.append(otro_elemento)
// Agrega un elemento dentro de otro
// OJO: agrega el elemento al final de los hijos del elemento padre

// Crear un elemento "strong"
const textoNegrita = document.createElement("strong");
textoNegrita.innerText = " Codigo 2021";
parrafo1.append(textoNegrita);

// Aumentar texto al strong
textoNegrita.append(" agregar texto");

let users = [
    {
        id: 1,
        email: 'george.bluth@gmail.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        age: 17,
    },
    {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        age: 27,
    },
    {
        id: 3,
        email: 'emma.wong@gmail.in',
        first_name: 'Emma',
        last_name: 'Wong',
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
        age: 37,
    },
    {
        id: 4,
        email: 'eve.holt@reqres.in',
        first_name: 'Eve',
        last_name: 'Holt',
        avatar: 'https://reqres.in/img/faces/4-image.jpg',
        age: 7,
    },
    {
        id: 5,
        email: 'charles.morris@reqres.in',
        first_name: 'Charles',
        last_name: 'Morris',
        avatar: 'https://reqres.in/img/faces/5-image.jpg',
        age: 47,
    },
    {
        id: 6,
        email: 'tracey.ramos@reqres.in',
        first_name: 'Tracey',
        last_name: 'Ramos',
        avatar: 'https://reqres.in/img/faces/6-image.jpg',
        age: 57,
    },
];


// 1. Por cada usuario, crear un <li>
// 2. colocar el nombre y apellido dentro del <li>
// 3. agregar el <li> al <ul>

const listaUsuarios = document.querySelector("#lista-usuarios");

// users.forEach((usuario)=>{
//     let liTemporal = document.createElement("li");
//     liTemporal.innerText = `${usuario.first_name} ${usuario.last_name}`;
//     listaUsuarios.append(liTemporal);
// });

// Concatenar string e imprimir el único string
let lisString ="";
users.forEach((usuario)=>{
    lisString = lisString + `<li>${usuario.first_name} ${usuario.last_name}</li>`;
});
listaUsuarios.innerHTML = lisString;

// Agregar una lista
for(let i=0; i<2;i++){
const list = document.createElement("li")
listaUsuarios.append(list);
list.innerText = `Item${i+1}`;
}
// Reemplazar las listas
// listaUsuarios.innerHTML = "<li>Item 1</li> <li>Item 2</li>";


