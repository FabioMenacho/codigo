// Las clases son estructuras que permiten crear objetos con las propiedades y métodos que tienen sus clases padres
// Una clase comienza por una mayúscula
class Producto {
    constructor(desc="", prec=0, color="") {
        this.descripcion = desc;
        this.precio = prec;
        this.color = color;
    }
    imprimirDatos = function () {
        console.log("Datos del producto");
        console.log(`Nombre: ${this.descripcion}`);
        console.log(`Precio: S/.${this.precio}`);
        console.log(`Color: ${this.color}`);

    };
}

let objProducto1 = new Producto("Play Station 5", 4000.0, "Blanco");
// objProducto1.descripcion = "Play Station 5";
// objProducto1.precio = 3500.0;
// console.log(objProducto1);
objProducto1.color = "Gris";
objProducto1.imprimirDatos();

let objProducto2 = new Producto();
console.log(objProducto2);


// Creando objetos de la clase Array

let arreglo1 = [90,8,7];
let arreglo2 = new Array();
arreglo2.push(50);
arreglo2.push(34);
arreglo2.push(8);

console.log(arreglo1);
console.log(arreglo2);


// Creando numbres desde su clase primitiva

let edad1 = 29;
let edad2 = new Number(38);

console.log(edad1);
console.log(edad2);

let respuesta=edad1+edad2;
console.log(respuesta);