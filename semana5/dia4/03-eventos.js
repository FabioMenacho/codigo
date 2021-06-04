
let linkGoogle = document.getElementById("linkGoogle");
let divCuadrado = document.getElementById("divCuadrado");
let selectPais = document.getElementById("selectPais");
let selectDpto = document.getElementById("selectDpto");
let inputNombre = document.getElementById("inputNombre");
let inputMensaje = document.getElementById("inputMensaje");
let letras = document.getElementById("letras");

let paises = [
    { id: 12343, nombre: "Perú", },
    { id: 12, nombre: "México", },
    { id: 13, nombre: "China", },
    { id: 19, nombre: "Argentina", },
];

let departamentos = [
    { id: 22, nombre: "Lima", idPais: 12343, stock: true },
    { id: 23, nombre: "Puno", idPais: 12343, stock: false },
    { id: 24, nombre: "Wujan", idPais: 13, stock: false },
    { id: 25, nombre: "Acapulco", idPais: 12, stock: true },
    { id: 26, nombre: "Fujian", idPais: 13, stock: false },
    { id: 27, nombre: "Buenos Aires", idPais: 19, stock: true },
    { id: 28, nombre: "Cordova", idPais: 19, stock: false },
    { id: 29, nombre: "Tulum", idPais: 12, stock: true },
];

// Funcion que se ejecuta al inicio 1 sola vez y no se guarda en ninguna variable 
(() => {
    // console.log("Fabio");
    paises.forEach((pais) => {
        let option = document.createElement("option");
        option.value = pais.id;
        option.innerText = pais.nombre;
        selectPais.append(option);
    });
})();

// Cada vez que cambie el valor del selectPais, se debe cargar la lista de departamentos que le pertenecen.
// Si el valor del pais es 0, se deberá limpiar los options del selectDpto

selectPais.onchange = (e) => {
    selectDpto.innerHTML = `<option value="0">-Seleccione Dpto-</option>`
    let idPais = +selectPais.value;
    // console.log(idPais);
    departamentos.forEach((dpto) => {
        if (dpto.idPais === idPais) {
            let option = document.createElement("option");
            option.value = dpto.id;
            option.innerText = dpto.nombre;
            selectDpto.append(option);
        };
    });
};


// cancelar un comportamiento por defecto
linkGoogle.onclick = (e) => {
    e.preventDefault();
    console.log("Click en linkGoogle");
}

// Se devuelve lo que ha pasado en el evento
divCuadrado.onclick = (e) => {
    console.log("Click divcuadrado");
    console.log(e);
}

// Se dispara el evento cuando el mouse ingresa al área que ocupa un elemento
divCuadrado.onmouseover = (e) => {
    console.log(e);
}

// Se dispara el eento cuando el mouse sale del área que ocupa un elemento
divCuadrado.onmouseout = (e) => {
    console.log(e);
}

// Se dispara cuando se suelta la tecla del inputNombre
inputNombre.onkeyup = (e) => {
    console.log(inputNombre.value);
}

// Cada vez que se escriba un nuevo caracter en el textarea deberá restarse de la cuenta máxima de 50 caracteres
// Cuando la cantidad total llegue a 50 caracteres no deberá escribirse más caracteres
inputMensaje.onkeyup = () => {
    let texto = inputMensaje.value;
    let caracteres = texto.length;
    if (caracteres > 50) {
        inputMensaje.value = inputMensaje.value.substr(0, 49);
    } else {
        letras.innerText = 50 - caracteres;
    }
}