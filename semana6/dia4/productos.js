const formulario = document.querySelector("#formulario");

formulario.onsubmit = (e) => {
  e.preventDefault();

  //* Ruta es
  // * nombre e -> target -> 0 ->value
  // * precio e -> target -> 1 ->value
  // * sku e -> target -> 2 ->value
  // * categoria_id e -> target -> 3 ->value
  const producto = {
    nombre: e.target[0].value,
    precio: e.target[1].value,
    sku: e.target[2].value,
    categoria_id: e.target[3].value,
  };
  storeProducto(producto);
  console.log(e);
  //   console.log(e.target[0].value);
};

const getProductos = async () => {
  try {
    const response = await axios.get(`${URL}/productos`);
    return response.data;
  } catch (e) {
    console.log(e.toString());
  }
};

const storeProducto = async (producto) => {
  // Intenta esto
  try {
    const response = await axios.post(`${URL}/productos`, producto);
    console.log(response);
    // y si falla entra aca
  } catch (e) {
    alert(e.toString());
  }
};

selectCategoria_2.onchange = async (e) => {
  const productos = await getProductos();
  const filtroProductos = productos.filter(
    (producto) => producto.categoria_id === selectCategoria_2.value
  );
  console.log(filtroProductos);
};
