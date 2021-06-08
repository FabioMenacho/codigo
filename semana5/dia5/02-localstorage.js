
const formulario  = document.querySelector("#formulario");
const inputProducto = document.querySelector("#inputProducto");
const inputPrecio = document.querySelector("#inputPrecio");
const tbody = document.querySelector("#tbody");

let arrayProductos = [];

formulario.onsubmit = (e) => {
    e.preventDefault();

    if(inputProducto.value.trim() === "" || inputPrecio.value.trim() ===""){
        // console.log("Error faltan datos");
        // libreria externa sweetalert2 tb se coloca en el HTML
        // funcion fire para disparar una alerta
        Swal.fire({
            title: 'Error!',
            text: 'Debe llenar todos los campos',
            icon: 'error',
            confirmButtonText: 'Ok'
          })
    }else{
        // Guardar la información y creamos un objeto con la info
        let objetoProducto = {
            producto: inputProducto.value,
            precio: inputPrecio.value,
        };
        
        arrayProductos.push(objetoProducto);
        // console.log("Si hay datos");

        // No podemos guardar array en el local storage asi que lo transformamos en string
        console.log(arrayProductos);
        let arrayProductosString = JSON.stringify(arrayProductos);
        console.log(arrayProductosString);

        localStorage.setItem("productos", JSON.stringify(arrayProductos));   
        
        setTableData();
    }
}

const setTableData = () => {
    // para limpiar mi tabla
    tbody.innerHTML  = "";

    arrayProductos.forEach((producto,posicion) =>{
        const tr = document.createElement("tr");
        const tdProducto = document.createElement("td");
        const tdPrecio = document.createElement("td");
        const tdAccion = document.createElement("td");
        // Boton
        const btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";

        btnEliminar.onclick = () => {
            eliminarProducto(posicion);
        }

        tdProducto.innerText = `${producto.producto}`;
        tdPrecio.innerText = `${producto.precio}`;
        tdAccion.appendChild(btnEliminar);

        tr.appendChild(tdProducto);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdAccion);

        tbody.appendChild(tr);
    });
};

const eliminarProducto = (posicion) => {
    // eliminamos un elemento en base a la posicion que le pasemos 
arrayProductos.splice(posicion,1);
   // Reemplazar el dato antiguo que tenia  en mi local storage por el nuevo arrayproductos
   localStorage.setItem("productos", JSON.stringify(arrayProductos));
setTableData();
};

(()=>{
    if(localStorage.getItem("producto")){
        console.log(localStorage.getItems("productos"));
        console.log(JSON.parse(localStorage.getItem("productos")));
        arrayProductos = JSON.parse(localStorage.getItem("productos"));
        setTableData();
    };
})();