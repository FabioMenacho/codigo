
// funcion normal que devuelve el 5
// const getUsers = () => {
//     return 5;
// };
// console.log(getUsers());



// funcion asyncrona retorna una promesa
// cuando una función asyncrona retorna algun valor con la sentencia "return" el valor que devuelve lo hace en una promesa

// const getUsers = async () => {
//     return 5;
// };

// devuelve una promesa
// console.log(getUsers());

// devuelve el valor
// getUsers().then((data) => {
//     console.log(data);
// });



const getUsers = async () => {
    return ["Jorge", "Manuel"];
};

const getNumbers = async () => {
    return [5, 3, 3, 4, 23];
};

// cuando usamos await es obligatorio que debamos estar dentro de una función asyncrona

const consumir = async () => {
    const users = await getUsers();
    const numeros  = await getNumbers();

    console.log(users);
    console.log(numeros);
};
consumir();

// el async await sirven para consumir promesas

