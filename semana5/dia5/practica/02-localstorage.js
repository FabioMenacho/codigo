const formulario = document.querySelector("#formulario");
const inputProducto = document.querySelector("#inputProducto");
const inputPrecio = document.querySelector("#inputPrecio");
const tbody = document.querySelector("#tbody");

let arrayProductos = [];

formulario.onsubmit = (e) => {
  e.preventDefault();

  // trim() la cual se encarga de quitar los espacios en blanco

  if (inputProducto.value.trim() === "" || inputPrecio.value.trim() === "") {
    Swal.fire({
      title: "Error!",
      text: "Debe llenar todos lo campos",
      icon: "error",
      confirmButtonText: "Ok",
    });
  } else {
    // Guardar la informacion
    // Creamos un objeto con al info
    let objetoProducto = {
      producto: inputProducto.value,
      precio: inputPrecio.value,
    };
    arrayProductos.push(objetoProducto);
    // Quiero guardar este datos en mi localStorage
    // La forma para guardar un objeto en localStorage es usando JSON.stringify(objeto)
    // Esto se debe a que localStorage sòlo acepta elementos de tipo STRING
    // JSON.stringify(objeto_json), convierte a string un json dado como paratmetro
   
    localStorage.setItem("productos", JSON.stringify(arrayProductos));

    setTableData();
  }
};

const setTableData = () => {
  tbody.innerHTML = "";

  arrayProductos.forEach((producto, posicion) => {
    //ELEMENROS DE MI TABLA
    console.log(producto);
    const tr = document.createElement("tr");
    const tdProducto = document.createElement("td");
    const tdPrecio = document.createElement("td");
    const tdAccion = document.createElement("td");
    // Boton
    const btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.setAttribute("class", "btn btn-danger");

    btnEliminar.onclick = () => elimiarProducto(posicion);

    console.log(producto.producto);
    tdProducto.innerHTML = `<h3>${producto.producto}</h3>`;
    tdPrecio.innerHTML = `<p>${producto.precio}</p>`;
    tdAccion.appendChild(btnEliminar);

    tr.appendChild(tdProducto);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdAccion);

    tbody.appendChild(tr);
  });
};

const elimiarProducto = (posicion) => {
  // Delete eliminar el elemento de una lista en base a la posicion quee le pasenmos
  // Ahora que elimine ese datos de mi lista
  //delete arrayProductos[posicion];
  arrayProductos.splice(posicion, 1);
  // Reemplazar el data viejo que tenia en mi localstorage por el nuevo arrayproductos
  localStorage.setItem("productos", JSON.stringify(arrayProductos));
  setTableData();
};

(() => {
  // Code
  if (localStorage.getItem("productos")) {
    console.log(localStorage.getItem("productos"));
    console.log(JSON.parse(localStorage.getItem("productos")));
    arrayProductos = JSON.parse(localStorage.getItem("productos"));
    setTableData();
  }
})();
