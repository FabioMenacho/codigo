// SOLUCION DE NUMEROS PARES

// PROBLEMA 2
// let pagoxhora = 10,
//   total = 0,
//   horas = 50;

// if (horas <= 40) {
//   total = pagoxhora * horas;
// } else {
//   total = pagoxhora * 40 + pagoxhora * 2 * (horas - 40);
// }

// console.log(`El sueldo semanal por ${horas} horas trabajadas es ${total} soles`);

// PROBLEMA 4
// let total = 0,
//   horas = 2;

// if (horas <= 2) {
//   total = 5 * horas;
// } else {
//   if (horas <= 5) {
//     total = 5 * 2 + 4 * (horas - 2);
//   } else {
//     if (horas <= 10) {
//       total = 5 * 2 + 4 * 3 + 3 * (horas - 5);
//     } else {
//       total = 5 * 2 + 4 * 3 + 3 * 5 + 2 * (horas - 10);
//     }
//   }
// }

// console.log(`Por ${horas} horas de estacionamiento son ${total} soles`);

// PROBLEMA 6
// let total = 0,
//   precio = 50;

// if (precio <= 100) {
//     total = precio*0.9;
//   } else {
//     if (precio <= 200) {
//         total = precio*0.88;
//     } else {
//         total = precio*0.85;
//     }
//   }

//   console.log(`El costo del artículo es de ${precio} soles y con la oferta sale ${total} soles`);

// PROBLEMA 8
// let bono = 0,
//   sueldo = 5000,
//   antiguedad = 10;

// if (antiguedad <= 2) {
//   bono = 0;
// } else {
//   if (antiguedad <= 5) {
//     bono = sueldo * 0.2;
//   } else {
//     bono = sueldo * 0.3;
//   }
// }

// if (sueldo <= 1000) {
//   bono = bono + sueldo * 0.25;
// } else {
//   if (sueldo <= 3500) {
//     bono = bono + sueldo * 0.15;
//   } else {
//     bono = bono + sueldo * 0.1;
//   }
// }

// console.log(
//   `El bono por ${antiguedad} años de trabajo y sueldo de ${sueldo} soles asciende a ${bono} soles`
// );

// PROBLEMA 10
// let presupuesto = 4000,
//   precioxkm = 1,
//   destino = ["mexico", "pv", "acapulco", "cancun"],
//   distancia = [750, 800, 1200, 1800];

// if (presupuesto <= 2 * distancia[0] * precioxkm) {
//   console.log(`Quedarse en casa`);
// } else {
//   if (presupuesto <= 2 * distancia[1] * precioxkm) {
//     console.log(`Vacaciones a ${destino[0]}`);
//   } else {
//     if (presupuesto <= 2 * distancia[2] * precioxkm) {
//       console.log(`Vacaciones a ${destino[1]}`);
//     } else {
//       if (presupuesto <= 2 * distancia[3] * precioxkm) {
//         console.log(`Vacaciones a ${destino[2]}`);
//       } else {
//         console.log(`Vacaciones a ${destino[3]}`);
//       }
//     }
//   }
// }

// PROBLEMA 12
// let pagoxhora = 10,
//   total = 0,
//   horas = 50;

// if (horas <= 40) {
//   total = pagoxhora * horas;
// } else {
//   if (horas <= 45) {
//     total = pagoxhora * 40 + pagoxhora * 2 * (horas - 40);
//   } else {
//     if (horas <= 50) {
//       total =
//         pagoxhora * 40 + 2 * pagoxhora * 5 + pagoxhora * 3 * (horas - 45);
//     } else {
//       total = pagoxhora * 40 + 2 * pagoxhora * 5 + pagoxhora * 3 * 5;
//     }
//   }
// }

// if (horas <= 50) {
//   console.log(
//     `El sueldo semanal por ${horas} horas trabajadas es ${total} soles`
//   );
// } else {
//   console.log(
//     `No está permitido trabajar más de 50 horas,
//         el sueldo semanal por 50 horas trabajadas es ${total} soles`
//   );
// }

// PROBLEMA 14
// let letra = ["a", "b", "c", "d", "f"],
//   calificacion = 10;
// nota = "";

// if (calificacion === 10) {
//   nota = letra[0];
// } else {
//   if (calificacion === 9) {
//     nota = letra[1];
//   } else {
//     if (calificacion === 8) {
//       nota = letra[2];
//     } else {
//       if (calificacion === 7 || calificacion === 6) {
//         nota = letra[3];
//       } else {
//         nota = letra[4];
//       }
//     }
//   }
// }

// console.log(`Saco ${calificacion} en el examen así que su nota es ${nota}`);

// PROBLEMA 16
// let salario = 1000,
//   puntos = 200;
// bono = 0;

// if (puntos <= 100) {
//   bono = salario;
// } else {
//   if (puntos <= 150) {
//     bono = 2*salario;
//   } else {
//     bono = 3*salario;
//   }
// }

// console.log(`Obtuvo ${puntos} puntos por lo cual su bono será ${bono} soles`);

// PROBLEMA 18
// let sueldo = 1000,
//   antiguedad = 2;
// bono = 0;

// if (antiguedad > 4 || sueldo < 2000) {
//   bono = sueldo*0.25;
// } else {
//     bono = sueldo*0.20;
// }

// console.log(`Con una antiguedad de ${antiguedad} años y un sueldo de ${sueldo} soles le corresponde un bono de ${bono} soles`);

// PROBLEMA 20
let n = 1000,
  precio = 0,
  ganacia = 0,
  modelo = "b",
  talla = 36,
  tela = 10;

if (modelo === "a" && talla === 34) {
  precio = n * (tela + 0.8 * tela) * 1.3;
} else {
  precio = n * (tela + 0.8 * tela) * 1.04 * 1.3;
}

if (modelo === "b" && talla === 34) {
  precio = n * (tela + 0.95 * tela) * 1.3;
} else {
  precio = n * (tela + 0.95 * tela) * 1.04 * 1.3;
}

ganancia = precio - precio / 1.3;

console.log(
  `Para ${n} pantalones modelo ${modelo} y talla ${talla} debemos vender todo el lote a ${precio} soles para ganar ${ganancia} soles`
);
