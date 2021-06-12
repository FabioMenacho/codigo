
const formulario = document.getElementById("formulario");
const inputColor = document.getElementById("inputColor");
const btnGuardar = document.getElementById("btnGuardar");
const btnBorrar = document.getElementById("btnBorrar");
const body = document.querySelector("body");

(()=> {
    if(localStorage.getItem("colorFondo")!=="null"){
        body.style.backgroundColor = localStorage.getItem("colorFondo");
        inputColor.value = localStorage.getItem("colorFondo");
    };
})();

formulario.onsubmit = (e) => {
    e.preventDefault();
    const color = inputColor.value;
    console.log(color);
    localStorage.setItem("colorFondo",color);
    body.style.background = color;
};

btnBorrar.onclick = () => {
    localStorage.removeItem("colorFondo");
    body.style.backgroundColor = "#fff";
    inputColor.value = "#000";
}

