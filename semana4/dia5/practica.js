
// const plato = () => {

//     let objPlato = {
//         nombre: "",
//         precio: 0,
//         ingredientes: [],
//     }
//     return  objPlato;
// }

// let ceviche = plato ();
// ceviche.nombre = "Ceviche";
// ceviche.precio = 30;
// ceviche.ingredientes.push("pescado");
// ceviche.ingredientes.push("limon");
// ceviche.ingredientes.push("aji");
// ceviche.ingredientes.push("sal");
// ceviche.ingredientes.push("cebolla");

// console.log(ceviche);


let cuarto = {
    dormir: "cama",
    distraer: "tv",
    ordenar: "ropero",
    area: 16,
    escritorio: ["lapicero", "libro", "cuaderno"],
    mesa: { art1: "polo", art2: "chompa", art3: "buzo" },

    imprimirEscritorio: function () {
        for (let i = 0; i < cuarto.escritorio.length; i++) {
            console.log(`Tengo ${cuarto.escritorio[i]}`);
        }
    },

    imprimirMesa: function () {
        console.log(cuarto.mesa);
    },
};

// cuarto.imprimirEscritorio();
cuarto.imprimirMesa();

// cuarto.distraer = "laptop";

// // Para arreglos
// cuarto.escritorio.push("mouse");
// cuarto.escritorio[1] = "hojas";

// // Para agregar un objeto
// cuarto.mesa.art4="almohada";


// console.log(cuarto);
