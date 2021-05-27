// function areaCirculo(r){

//     function cuadrado(n){
//         return n*n;
//     }

//     let rpta = cuadrado(r) * 3.1416;
//     return rpta;
// }

// let circulo12 = areaCirculo(12);

// console.log(`El área del círculo con radio de 12 es ${circulo12}`);

/**
 * Función que busca un nombre dentro de una arreglo de nombres y retorna la posición en la que se encuentra el nombre buscado
 * si el nombre no existe retorna -1
 * @param {String} nombre
 * @param {Array} nombres
 */
function buscarNombre(nombre, nombres) {
    for (let i = 0; i < nombres.length; i++) {
        if(nombres[i] === nombre){
            return i;
        }        
    }
    return -1;
}

let names = ["jorge", "carlos", "diana", "roxana", "dora"];

let posicion = buscarNombre("roxana", names);

if(posicion >=0){
    console.log(`Encontrado en la posición ${posicion}`);
}else{
    console.log(`Ups! no se encontró el nombre en la DB`);
}
