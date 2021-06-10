const URL = "https://jsonplaceholder.typicode.com/todos";

// fetch es una función propia del navegador para JS  y tiene un comportamiento similar a la libreria axios

// fetch(URL).then((peticion) => {
//     peticion.json().then((rpta) => {
//         console.log(rpta);
//     });
// });

// por defecto es GET
fetch(URL).then((peticion) => {
    return peticion.json();
    }).then((data) => {
        console.log(data);
    });


