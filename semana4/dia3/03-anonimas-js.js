// FUNCIONES ANONIMAS y CALLBACKS

// function miFuncion(){
//     console.log("Soy miFuncion");
// }

function buscarPorDNI(dni, parametro2) {
  // setTimeout(function () {
  //     console.log("Pasaron 3 segundos");
  //     return "Jorge";
  // }, 3000)

  // Recién se ejecuta function ()
  setTimeout(function () {
    parametro2("Jorge");
  }, 3000);
  
}

// miFuncion sin parentesis no se ejecuta
// let resultado = buscarPorDNI(7778394, miFuncion);
// console.log(resultado);

// en el segundo parámetro hay una funcion anónima (sin nombre)
buscarPorDNI(6266723, function (nombre) {
  console.log(`Resultado: ${nombre}`);
});

// funcion anónima
let saludar = function() {
console.log("Estoy saludando");
}

saludar();


/**
 * Función que entrega los usuarios del sistema
 * @param {Function} callback 
 * Función que recibe un callback al cual envía un arreglo con la lista de usuarios
 */
const getNombres = (callback) => {
    fetch("https://reqres.in/api/users").then((peticion) => {
      return peticion.json();
    }).then(data => {
      let nombres = data.data.map(obj => obj.first_name);
      callback(nombres);
    })
  };

  let nombres = getNombres(function(usuarios){
    console.log(usuarios); 
  });
  console.log("Linea final");