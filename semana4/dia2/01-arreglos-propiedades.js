// ¿Como insertar un elemento en un arreglo?
// arreglo.push(elemento a ingresar)
// Se ingresa al final del arreglo

let marcasDeAutos = [];
// marcasDeAutos.push("hyundai");
// marcasDeAutos.push("kia");
// marcasDeAutos.push("audi");

for(let i=0; i<5; i++){
    let marca = prompt("Ingrese una nueva marca");
    marcasDeAutos.push(marca);
}

console.log(marcasDeAutos);


// Ambito de una variable (SCOPE)
// marca e i están creados dentro del ambito del for, no son universales



