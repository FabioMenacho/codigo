// Creamos una BD en mockAPI



const URL_BASE = "https://60c17d114f7e880017dbfad0.mockapi.io";

// Esta función obtiene las categorias de la BD
const getCategorias = () => {
    axios.get(`${URL_BASE}/categorias`).then((rpta) => {
        console.log(rpta);
        console.log(rpta.data);
    }).catch((error) => {
        console.log(error);
    });
};

getCategorias();