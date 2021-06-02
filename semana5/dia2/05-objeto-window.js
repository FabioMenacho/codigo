console.log(window);

// El objeto window representa a todo el navegador
// Tiene funciones para controlar el DOM, funciones para imprimir en consola, para calcular el tamaño del viewport, etc.
// OJO: muchos métodos y propiedades de window e escriben sin tener que colocar el objeto window como tal, por ejemplo:
// prompt, console, alert, entre otros.

window.console.log("EL MENSAJE");

// window.innerWidth
// devuelve el ancho del viewport

console.log(`Ancho del viewport: ${window.innerWidth}`);

// Una de las propiedades más importantes de window, es el objeto "document" que sirve para controlar los elementos internos del DOM
//  - crear etiquetas
//  - eliminar etiquetas
//  - cambiar clases
//  - cambiar estilos
//  - modificar textos
//  - cambiar estilos
//  - capturar valores en los formularios, etc.
