// console.log("HOLA NODE, ahora soy un proyecto");

const axios = require ("axios").default;
// console.log(axios);

// intentar consumir una api falsa de usuarios e imprimirlo en consola
axios.get('https://60c17d114f7e880017dbfad0.mockapi.io/categorias')
  .then((rpta) => {
    // handle success
    console.log(rpta.data);
  })