// Funciones
// porciones de código disponible para ejecutarlas en cualquier momento

function tablaDeMultiplicar(n=3, limite=7){
    console.log(`*********TABLA DEL ${n}***********`);
    for(let i=0; i<limite; i++){
        console.log(`${n} x ${i} = ${i*n}`);
    }
}

tablaDeMultiplicar(4,3);
// tablaDeMultiplicar(5);
// tablaDeMultiplicar();

function factorial(n) {
    let total = 1;
    for(let i=n; i>0; i--){
        total=total*i;
    }
    return total;
}

let fact5 = factorial(5);

console.log(`El factorial de 5 es ${fact5}`);

// function sumar(a,b){
//     return a+b;
// }

// let suma7y8 = sumar(7,8)

// console.log(`7 + 8 = ${suma7y8}`);

// Sin usar el simbolo + sumar 4 numeros, solo usando la funcion sumar

// let suma7y8y6y3 = sumar(sumar(7,8),sumar(6,3));

// console.log(`7 + 8 + 6 + 3 = ${suma7y8y6y3}`);

// Cuando el return se ejecuta termina la funcion
function validarPasswords(ps1, ps2) {
  if (ps1 === ps2 && ps1.length >= 6) {
    return true;
  }
  console.log("A continuación se retorna false");
  return false;
}

let resultado = validarPasswords("abcdefg", "abcdefg");
console.log(resultado);
