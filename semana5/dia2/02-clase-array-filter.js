
// array.filter((elemento, indice?, arreglo?)=>{})
// Método que recorre todos los elementos de un arreglo
//  - Por cada item se ejecuta el callback que pasamos al método filter
//  - El método filter OPCIONALMENTE puede retornar un elemento por cada iteración
//  - Por ser un método filter, se considera que dentro de la estructura del callback habrá una especie de validación o filtro con un IF
//  - El elemento que sea retornado en las iteraciones, va a ser SIEMPRE EL MISMO ELEMENTO, no peude ser un objeto nuevo o un valor diferente.
//  - Si nungún elemento coincide con la busqueda de todas formas se retornará un arreglo vacío.

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

// Filtrar los usuarios mayores o iguales a 18 años
let resultado = users.filter((usuario, i) => {
    if (usuario.age >= 18) {
        return usuario;
    }
});
console.log(resultado);

// Forma corta de hacer un filter
// Filtrar todos los usuarios que tenga gmail
let gmails = users.filter((usuario, i) => (usuario.email.indexOf("gmail") >= 0));
console.log(gmails);

let age = users.filter((usuario, i) => (usuario.age >= 100));
console.log(age);