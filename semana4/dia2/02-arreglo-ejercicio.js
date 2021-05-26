// Ejercicio:
// Dados 2 arreglos, el usuario escribirá 1 o 2:
// 1. Para traducir una palabra del castellano al inglés
// 2. Para traducir una palabra del inglés al castellano
// En ambos casos el usuario deberá ingresar 1ero la opción y lueg la palabra a traducir
// El sistema deberá mostrar la palabra traducida o en us defecto un  error que no se encuentra la palabra

let castellano = ["hola", "bien", "adios", "mañana", "comer", "cantar"];
let ingles = ["hello", "good", "bye", "tomorrow", "eat", "sing"];
let opcion = +prompt("Ingresar opción 1:C-I o 2:I-C");
let palabra = prompt("Ingresar la palabra");
let respuesta = "";

if (opcion === 1) {
  for (let i = 0; i < castellano.length; i++) {
    if (palabra === castellano[i]) {
      console.log(`Palabra encontrada`)
      respuesta = `La palabra ${palabra} traducida al inglés es ${ingles[i]}`
    }
  }
} else {
  for (let i = 0; i < ingles.length; i++) {
    if (palabra === ingles[i]) {
      console.log(`Palabra encontrada`);
      respuesta = `La palabra ${palabra} traducida al castellano es ${castellano[i]}`;
    }
  }
}

if (respuesta === "") {
  console.error("Ups! la palabra buscada no existe en la BD");
} else {
  console.log(respuesta);
}

// Investigar el uso de:
// WHILE
// DO WHILE
