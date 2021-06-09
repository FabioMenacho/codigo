// Destructuración de objetos

let objPais = {
    nombre: "Perú",
    poblacion: 33000000,
    idiomas: ["Castellano", "Aymara", "Quechua"],
    monarquia: false,
};

// 1. Forma correcta de copiar un objeto

let copiaPais = {...objPais};

console.log(objPais);
console.log(copiaPais);

//  2. Copiando un arreglo y agregando 1 atributo
let copiaPais2 = {
    ...objPais,
    gentilicio: "peruano/peruana"
};

console.log(objPais);
console.log(copiaPais2);

// 3. Copiando un arreglo, modificando un atributo y agregando uno nuevo

let colombia = {
    ...objPais,
    nombre: "Colombia",
    poblacion: 50000000,
    gentilicio: "colombiano/colombiana",
};

console.log(copiaPais2);
console.log(colombia);

// Forma tradicional de obtener el valor de un atributo interno
// const nombre = colombia.nombre;

const {nombre, poblacion} = colombia;
console.log(nombre);
console.log(poblacion);
console.log(colombia.gentilicio);

const imprimirPoblacion = ({nombre,poblacion}) => {
    console.log(`Población de ${nombre}: ${poblacion} habitantes`);
};
imprimirPoblacion(objPais);