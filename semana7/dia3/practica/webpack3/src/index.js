const axios = require("axios").default;

// forma moderna en vez de require
import {fecha} from "./servicios";
console.log(fecha);

axios.get('https://60c17d114f7e880017dbfad0.mockapi.io/categorias')
  .then((rpta) => {
    // handle success
    console.log(rpta.data);
  });