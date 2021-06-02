
// arreglo.find((elemento, indice?,arreglo?)=>{})
// Método que recorre los elementos de un arreglo
//  - El método find recorre un único elemento
//  - Igual que el elemento filter, se debe cumplir con una condición para que el elemento que cumpla sea esa condición sea retornado.
//  - Solo es retornado el primer elemento que cumpla con la condición.
//  - Si ningún elemento cumple con la condició, se retorna un UNDEFINED.

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

// Encontrar al elemento de id=3

let id3 = users.find((usuario, i) => (usuario.id === 3));
console.log(id3);

let id30 = users.find((usuario, i) => (usuario.id === 30));
console.log(id30);