
// destructuración en arreglos

let edades = [12, 52, 32, 16, 85, 42, 15];

// Forma de copiar correctamente un arreglo
let nuevasEdades = [...edades];

// Obtener una copia de un arreglo y agregarle dos elementos 
let nuevasEdadesMasDos = [...edades, 20, 80];

console.log(edades);
console.log(nuevasEdades);
console.log(nuevasEdadesMasDos);

// obtener los 2 primeros elementos del arreglo edades
let [n1, n2] = edades;
console.log(n1);
console.log(n2);

// obtener los 2 primeros elementos del arreglo edades y los demás en un nuevo arreglo
let [numero1, numero2, ...resto] = edades;

console.log(numero1);
console.log(numero2);
console.log(resto);

// operador rest
const numeros = (...elementos) => {
console.log(elementos);
}

numeros(45, 12, 19, 18, 74, 0)


// Ejemplo
// Función que recibe el nombre de una ciudad y retorna en un arreglo de 2 elementos la latitud y la longitud de dcha ciudad



const getCoordenadasPorNombreCiudad = (nombre) => {

    let rpta = [-14.4567, -62.7245];
    return rpta;
};

const [lat,lon] = getCoordenadasPorNombreCiudad("Puno");
console.log(`Latitud: ${lat}`);
console.log(`Longitud: ${lon}`);