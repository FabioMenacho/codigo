import axios from "axios";

axios.get('https://60c17d114f7e880017dbfad0.mockapi.io/categorias')
  .then((rpta) => {
    // handle success
    console.log(rpta.data);
  });

alert("noooooo");