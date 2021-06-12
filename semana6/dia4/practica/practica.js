
const URL = "https://60c17d114f7e880017dbfad0.mockapi.io";

const inputId = document.getElementById("inputId");
const btnBuscar = document.getElementById("btnBuscar");
const btnCrearCategoria = document.getElementById("btnCrearCategoria");
const inputEliminar = document.getElementById("inputEliminar");
const btnEliminar = document.getElementById("btnEliminar");
const selectCategoria = document.getElementById("selectCategoria");

const getCategorias = async () => {
    try {
        const response = await axios.get(`${URL}/categorias`);
        console.log(response);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error.toString());
    }
};
// getCategorias();

const getCategoriasById = async (id) => {
    try {
        const response = await axios.get(`${URL}/categorias/${id}`);
        console.log(response.data);
    } catch (error) {
        console.log(error.toString);
    };
};

btnBuscar.onclick = () => {
    const id = inputId.value;
    getCategoriasById(id);
}





const storeCategorias = async () => {
    const data = {
        nombre: "fabio",
        sku: "FABIO",
    };
    try {
        const response = await axios.post(`${URL}/categorias`, data);
        console.log(response);
        console.log(response.data);
    } catch (error) {
        console.log(error.toString());
    };
};

btnCrearCategoria.onclick = () => {
    storeCategorias();
};





const updateCategoria = async (id) => {
    const data1 = {
        nombre: "kurdo",
        sku: "KURDO",
    }
    try {
        const response = await axios.put(`${URL}/categorias/${id}`, data1);
        console.log(response);
    } catch (error) {
        console.log(error.toString);
    };
};

btnActualizar.onclick = () => {
    const id1 = inputId.value;
    updateCategoria(id1);
}





const deleteCategoria = async (id) => {
    try {
        const response = await axios.delete(`${URL}/categorias/${id}`);
        console.log(response);
    } catch (error) {
        console.log(error.toString);
    };
};

btnEliminar.onclick = () => {
    const id2 = inputEliminar.value;
    deleteCategoria(id2);
};




const llenarCategorias = (categorias) => {
    selectCategoria.innerHTML = `<option value='0' selected disabled>Seleccione una categoria</option>`;

    categorias.forEach((categoria) => {
        const option = document.createElement("option");
        option.innerText = categoria.nombre;
        option.value = categoria.id;
        selectCategoria.append(option);
    });
};

// no entiendo
(async () => {
    // Wait -> esperar
    // Sin async await esto retorna una promesa
    const categorias = await getCategorias();
  
    llenarCategorias(categorias);
})();