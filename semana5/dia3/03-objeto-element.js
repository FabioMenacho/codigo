
/**
 * element.classList
 * Retorna una arreglo con la lista de clases que tiene un elemento
 */


/**
 * element.classList.add("nombre_de_clase")
 * Agrega una clase a un elemento, si el elemento tuviera clases no se reemplaza, se agrega 
 */


/**
 * element.classList.remove("nombre_de_clase")
 * Si el elemento tiene la clase que pasamos como parámetro, borra dicha clase de las que tiene
 */

/**
 * element.classList.toggle("nombre_de_clase")
 * Si el elemento tiene la clase que pasamos como parámetro esta clase será borrada, en caso contrario será agregada.
 * Nota: es como un interruptor
 */


let div1 = document.getElementById("div1");
let btn1 = document.getElementById("btn1");
let btn1Borrar = document.getElementById("btn1-borrar");
let btn1Toggle = document.getElementById("btn1-toggle");

// agregar el evento click al btn1
btn1.onclick = () => {
    div1.classList.add("circulo");
}

// borrar el evento click al btn1
btn1Borrar.onclick = () => {
    div1.classList.remove("circulo");
}

// interruptor del evento click al btn1
btn1Toggle.onclick = () => {
    div1.classList.toggle("circulo");
}

console.log(div1.classList); 

// element.setAttribute("atributo","valor")
// Asigna un valor a un atributo para una etiqueta

// element.getAttribute("atributo")
// Retorna el valor que tiene una etiqueta en un determinado atributo

let imagen = document.getElementById("imagen");
let btnImagen = document.getElementById("btnImagen");

btnImagen.onclick = () => {
    imagen.setAttribute("src", "http://placehold.it/150X150")
};

// Imprimir el href de un link
let linkGoogle = document.getElementById("linkGoogle");
console.log(linkGoogle.getAttribute("href"));

