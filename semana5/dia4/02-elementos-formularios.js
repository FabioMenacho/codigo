
let inputNombre = document.getElementById("inputNombre");
let selectPais = document.getElementById("selectPais");
let btnProcesar = document.getElementById("btnProcesar");
let btnValidar = document.getElementById("btnValidar");

btnProcesar.onclick = () => {
    console.log(inputNombre.value);
    console.log(selectPais.value);
}

btnValidar.onclick = () => {
    let nombre = inputNombre.value;
    // convertimos a entero el valor de selectPais
    let pais = +selectPais.value;

    if(nombre === ""){
        inputNombre.classList.add("input-error");
    }else{
        inputNombre.classList.remove("input-error");
    }

    if(pais === 0){
        selectPais.classList.add("input-error");
    }else{
        selectPais.classList.remove("input-error");
    }
}