// Funciones con mayuscula que crean objetos con caracteristicas

const Plato = () =>{

    let objPlato = { 
    nombre: "",
    precio: 0,
    ingredientes: [],
}
return objPlato;
} 

let ceviche = Plato ();
let secoDeCordero = Plato ();

// Llenando las características de ambos

ceviche.nombre = "ceviche";
console.log(ceviche);
console.log(secoDeCordero);


// ERROR: si se hace así el objeto vehiculo se modifica y se queda grabado asi

// let vehiculo = {
//     marca: "",
//     tipo: "",
//     color:"",
//     anio: 0,
// }

// let carroJorge = vehiculo;
// let carroEmily = vehiculo;

// carroJorge.marca = "Mazda"

// console.log(carroJorge);
// console.log(carroEmily);
// console.log(vehiculo);