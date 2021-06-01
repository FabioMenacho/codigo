// La palabra reservada this hace referencia al objeto en el que se le invoca
// this hace referencia al objPersona

let objPersona = {
    nombre: "Fabio",
    apellido: "Menacho",
    mostrarDatos: function () {
        console.log(`${this.nombre} ${this.apellido}`);
    },
};

objPersona.mostrarDatos();

// Creación de clases de forma tradicional en JS

function Persona () {
    this.nombre = "Fabio";
    this.edad = 38;
    this.apellido = "Landa";
    // Para usar el operador this no se debe usar el operador flecha
    this.imprimirInfo = function () {
        console.log(`${this.nombre} ${this.apellido} con ${this.edad} años`);
    };
}
let objPersona1 = new Persona();
objPersona1.imprimirInfo();

