
let formulario = document.getElementById("formulario");
let inputProducto = document.getElementById("inputProducto");
let inputPrecio = document.getElementById("inputPrecio");
let tbody = document.getElementById("tbody");

let arrayProductos = [];

formulario.onsubmit = (e) => {
    e.preventDefault();
    if (inputProducto.value.trim() === "" || inputPrecio.value.trim() === "") {
        Swal.fire({
            icon: 'error',
            title: '¡Error!',
            text: 'Debe llenar todos los campos',
            // footer: '<a href="">Why do I have this issue?</a>'
            confirmButtonText: 'Okeeeeeey'
        });
    } else {
        let objetoProducto = {
            producto: inputProducto.value,
            precio: inputPrecio.value,
        };
        arrayProductos.push(objetoProducto);
        console.log(arrayProductos);

        let arrayProductosString = JSON.stringify(arrayProductos);
        console.log(arrayProductosString);

        localStorage.setItem("productos",arrayProductosString);

        setTableData();
    };

};

const setTableData = () => {

    tbody.innerHTML  = "";

    arrayProductos.forEach((producto,posicion) => {
        const tr = document.createElement("tr");
        const tdProducto = document.createElement("td");
        const tdPrecio = document.createElement("td");
        const tdAccion = document.createElement("td");

        const btnEliminar = document.createElement("button");
        btnEliminar.innerText = "Eliminar";

        btnEliminar.onclick = () => {
            eliminarProducto(posicion);
        };

        tdProducto.innerText = `${producto.producto}`;
        tdPrecio.innerText = `${producto.precio}`;
        
        tdAccion.append(btnEliminar);
        tr.append(tdProducto);
        tr.append(tdPrecio);
        tr.append(tdAccion);        

        tbody.append(tr);
    });
};

(() => {
    if(localStorage.getItem("productos")){
        arrayProductos = JSON.parse(localStorage.getItem("productos"));
        setTableData();
    };
})();

const eliminarProducto = (posicion) => {
    arrayProductos.splice(posicion,1);
    localStorage.setItem("productos",JSON.stringify(arrayProductos));
    // setTableData();
};



