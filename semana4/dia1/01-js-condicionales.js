// Condicionales

// Ejemplo 3.3 pág 53

// let unidades = 0;
// unidades = +prompt("¿Cuantos productos desea comprar?");
// if (unidades >= 1000) {
//   console.log(`Precio x producto: 0.85 céntimos`);
//   console.log(`Total a pagar: ${unidades * 0.85}`);
// } else {
//   console.log(`Precio x producto: 0.90 céntimos`);
//   console.log(`Total a pagar: ${unidades * 0.9}`);
// }
// document.write(unidades);

// Ejemplo 3.4 pág 55

// let total = 0;
// total = +prompt("¿Que traje desea comprar?");
// if (total >= 2500) {
//   total = total * 0.85;
// } else {
//   total = total * 0.92;
// }
// console.log(`Su total a pagar es ${total}`);
// document.write(total);

// Ejemplo 3.5 pág 58

// let n1 = 32;
// let n2 = 5;
// let n3 = 100;
// let mayor = 0;

// if (n1 > n2) {
//   if (n1 > n3) {
//     mayor = n1;
//   } else {
//     mayor = n3;
//   }
// } else {
//   if (n2 > n3) {
//     mayor = n2;
//   } else {
//     mayor > n3;
//   }
// }

// document.write(`El mayor es: ${mayor}`);

// Tipos de comparadores
// >, <, >=, <=
// === (si a es igual que b en valor y tipo de dato)
// == (si a es igual que b en valor)
// !== (a es diferente de b)

// Comparadores lógicos
// a && b (si a y b son verdaderos)
// a || b (si a y/o b son verdaaderos)
// !a (la negación de a)

// otra forma

// let n1 = 32,
//   n2 = 5,
//   n3 = 100,
//   mayor = 0;

// if (n1 > n2 && n1 > n3) {
//   mayor = n1;
// }else{
//     if(n2 > n3 && n2 > n1){
//         mayor = n2;
//     }else{
//         mayor = n3;
//     }
// }
// document.write(`El mayor es: ${mayor}`)

// Ejercicio para or: Dado el precio de un producto,
// aplicar el 15% de descuento en caso sea día lunes o martes

// let precio = 1000;
// let dia = "martes";

// if (dia === "lunes" || dia == "martes") {
//   precio = precio * 0.85;
// }

// document.write(`Total a pagar: ${precio}`);

// Ejemplo 3.6 pág 61

// let platos = 250,
//   total = 0;

// if (platos < 200) {
//   total = platos * 95;
// } else {
//   if (platos <= 300) {
//     total = platos * 85;
//   } else {
//     total = platos * 75;
//   }
// }

// document.write(`Cantidad de platos: ${platos} <br> Total a pagar: ${total}`);

// Ejemplo 3.4 de los propuestos pág 89

// let tiempo = 8,
//   total = 0;

// if (tiempo <= 2) {
//   total = tiempo * 5;
// } else {
//   if (tiempo <= 5) {
//     total = 2 * 5 + (tiempo - 2) * 4;
//   } else {
//     if (tiempo <= 10) {
//       total = 2 * 5 + 3 * 4 + (tiempo - 5) * 3;
//     } else {
//       total = 2 * 5 + 3 * 4 + 5 * 3 + (tiempo - 10)*2;
//     }
//   }
// }

// document.write(`Total: ${total}`);

// Ejemplo 3.18 de los propuestos pág 91

let tiempo = 8,
  sueldo = 1000,
  bono = 0;

if (tiempo > 4 || sueldo < 2000) {
  bono = sueldo * 0.25;
} else {
  bono = sueldo * 0.2;
}

document.write(`Total: ${bono}`);
