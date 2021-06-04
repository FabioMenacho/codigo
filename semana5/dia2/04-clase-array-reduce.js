
// array.reduce((sumatoria,valorActual)=>{},valor_inicial)
// Método que recorre todos los elementos de un arreglo
//  - Su finalidad es hacer una sumatoria acumulada, sumando cada valor de cada iteración para tener un resultado final

let numeros = [4, 3, 45, 2, 20];

let sumatoriaNumeros = numeros.reduce((sumatoria, elementoActual) => {
    return sumatoria + elementoActual;
}, 0);

console.log(`Suma total: ${sumatoriaNumeros}`);

let users = [
    {
        id: 1,
        email: 'george.bluth@gmail.in',
        first_name: 'George',
        last_name: 'Bluth',
        avatar: 'https://reqres.in/img/faces/1-image.jpg',
        age: 17,
    },
    {
        id: 2,
        email: 'janet.weaver@reqres.in',
        first_name: 'Janet',
        last_name: 'Weaver',
        avatar: 'https://reqres.in/img/faces/2-image.jpg',
        age: 27,
    },
    {
        id: 3,
        email: 'emma.wong@gmail.in',
        first_name: 'Emma',
        last_name: 'Wong',
        avatar: 'https://reqres.in/img/faces/3-image.jpg',
        age: 37,
    },
    {
        id: 4,
        email: 'eve.holt@reqres.in',
        first_name: 'Eve',
        last_name: 'Holt',
        avatar: 'https://reqres.in/img/faces/4-image.jpg',
        age: 7,
    },
    {
        id: 5,
        email: 'charles.morris@reqres.in',
        first_name: 'Charles',
        last_name: 'Morris',
        avatar: 'https://reqres.in/img/faces/5-image.jpg',
        age: 47,
    },
    {
        id: 6,
        email: 'tracey.ramos@reqres.in',
        first_name: 'Tracey',
        last_name: 'Ramos',
        avatar: 'https://reqres.in/img/faces/6-image.jpg',
        age: 57,
    },
];

// Hacer la sumatoria de las edades de las personas del arreglo users
// let edades = [];
// users.forEach((usuario) => {
//     edades.push(usuario.age);
// });
// let suma = edades.reduce((sumatoria, edad) => {
//     return sumatoria + edad;
// }, 0);
// console.log(`Suma total: ${suma}`);

let edades = users.map((usuario)=>{
    return usuario.age;
})

let suma = edades.reduce((sumatoria, edad)=>{
    return sumatoria + edad;
},0);
console.log(`Suma total: ${suma}`);
