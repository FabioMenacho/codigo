
// Una de las propiedades más importantes de window, es el objeto "document" que sirve para controlar los elementos internos del DOM
//  - crear etiquetas
//  - eliminar etiquetas
//  - cambiar clases
//  - cambiar estilos
//  - modificar textos
//  - cambiar estilos
//  - capturar valores en los formularios, etc.

console.log(window.document);


// Propiedades del objeto document

// document.getElementById("id_de_un_elemento_del_DOM")
// Obtiene en una variable la referencia a una etiqueta del DOM
const titulo = document.getElementById("titulo");
console.log(titulo);
// HTMLElement
console.log(typeof titulo);

// document.getElementsByClassName("nombre_de_la_clase")
// Obtiene en una "colección" (no array) el conjunto de elementos que comparten una misma clase
const listItems = document.getElementsByClassName("list-item");
console.log(listItems);
console.log(listItems.length);
// Artificio para convertir una colección de elementos a un arreglo
const arregloListItems = Array.from(listItems);
console.log(arregloListItems);

// document.querySelector("selector_del_elemento_como_en_css")
// Obtiene UN elemento dado un selector al estilo css
// Ejm: .rojo => selecciona un elemento de clase rojo
// #titulo => selecciona un elemento de id "titulo"
// div > .parrafo => selecciona un elemento de clase "parrafo" que esté dentr de un div

const parrafo1 = document.querySelector("#parrafo1");
console.log(parrafo1);

// document.querySelectorAll("selector_del_elemento_como_en_css")
// Análogo a querySelector, sin embargo, si el selector captura a más de un elemento nos retorna la colección de los elementos
const listItemsLi = document.querySelectorAll("li");
console.log(listItemsLi);

// document.createElement("etiqueta_a_crear")
// Devuelve la referencia a un elemento creado desde JS.
// OJO: no significa que el elemento se encuentre en el DOM, solo está creado

const linkGoogle = document.createElement("a");
console.log(linkGoogle);



