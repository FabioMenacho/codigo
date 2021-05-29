// PROBLEMAS IMPARES

// PROBLEMA 1
// let salario = 1000;

// for (let i = 0; i < 6; i++) {
//   salario = salario * 1.1;
//   console.log(`El año ${i + 1} su salario es ${salario} soles`);
// }

// PROBLEMA 3
// let n = 5,
//   cantidades = [1, -2, 3, -4, 0],
//   a = 0,
//   b = 0,
//   c = 0;

// for (let i = 0; i < 5; i++) {
//   if (cantidades[i] < 0) {
//     a = a + 1;
//   } else {
//     if (cantidades[i] > 0) {
//       c = c + 1;
//     } else {
//       b = b + 1;
//     }
//   }
// }

// console.log(
//   `En los ${n} números tenemos ${a} elementos menores a cero, ${c} elementos mayores a cero y ${b} elementos iguales a cero`
// );

// PROBLEMA 5
// let ahorro = 1, total=0;

// for (let i = 0; i < 365; i++) {
//   ahorro = ahorro * 3;
//   total= total+ahorro;
//   console.log(`El día ${i + 1} ahorra ${ahorro} soles,`);
// }

// console.log(`El total ahorrado es ${total} soles`);

// PROBLEMA 9
// let depositomensual=100, n=3, interes=0, total=0;

// for(let i=0; i<n; i++){
//     deposito=depositomensual*12;
//     interes=deposito*0.1;
//     total=total+deposito;
//     console.log(`El año ${i + 1} ahorra ${deposito} soles y el interés que genera es ${interes}`);
// }

// console.log(`El total ahorrado en ${n} años es de ${total} soles y el interés que genera es ${interes*n}`);

// PROBLEMA 11

// let x = 1,
//   precision = 10,
//   e = 1,
//   f = 1;

// for (let i = 0; i < precision; i++) {
//   f = f * (x / (i + 1));
//   e = e + f;
// }

// console.log(`e elevado a la ${x} con una precisión de ${precision} es ${e}`);

// PROBLEMA 13

// let n = 5,
//   cantidades = [1000, 2000, 3000, 15000, 18000],
//   a = 0, total=0,
//   b = 0;

// for (let i = 0; i < n; i++) {
//   if (cantidades[i] <= 10000) {
//     a = a + 1;
//   } else {
//     b = b + 1;
//   }
// }

// console.log(
//   `En las ${n} ventas tenemos ${a} ventas menores de 10,000 soles y ${b} ventas mayores a 10,000 soles pero menores a 20,000 soles`
// );

// for (let i = 0; i < 5; i++) {
//     total= total + cantidades[i];
//     console.log(`Venta ${i+1}: ${cantidades[i]} soles`);
//   }

//   console.log(`Se vendio en total ${total} soles`);


// PROBLEMA 15

// let n = 5,
// nombres=["javier", "eduardo", "francisco", "roberto", "carlos"]
//   horas = [15, 20, 30, 40, 10],
//   sueldoxhora = 10;
//   sueldo=[];

// for (let i = 0; i < 5; i++) {
//   if (horas[i]*sueldoxhora <= 150) {
//     sueldo[i]=horas[i]*sueldoxhora*0.95;
//   } else {
//     if (horas[i]*sueldoxhora <= 300) {
//         sueldo[i]=horas[i]*sueldoxhora*0.93;
//     } else {
//         sueldo[i]=horas[i]*sueldoxhora*0.91;
//     }
//   }
// }

// for (let i = 0; i < 5; i++) {
// console.log(
//   `${nombres[i]} recibirá ${sueldo[i]} por ${horas[i]} horas trabajadas`
// );
// }

// PROBLEMA 17

// let k=5;

// for(let i=0; i<10; i++){
//     console.log(`${k} x ${i+1} = ${k*(i+1)}`);
// }

// PROBLEMA 19

// let n = 5,
// clave = [1, 2, 3]
//   costoclaves = [10000, 20000, 30000],
//   cantidad = [2, 2, 1];
// impuesto = [];

// for (let i = 0; i < n; i++) {
//   if (clave[i] = 1) {
//     impuesto[i] = costoclaves[i] * cantidad[i] * 0.1;
//   } else {
//     if (clave[i] = 2) {
//         impuesto[i] = costoclaves[i] * cantidad[i] * 0.07;
//     } else {
//         impuesto[i] = costoclaves[i] * cantidad[i] * 0.05;
//     }
//   }
// }

// console.log(
//   `Pagará ${impuesto[0]} soles de impuestos por la clave 1, ${impuesto[1]} soles de impuesto por la clave 2 y ${impuesto[2]} soles de impuesto por la clave 3 y ${impuesto[0]+impuesto[1]+impuesto[2]} soles en total de impuestos`
// );


// PROBLEMA 21

let cantidadmonedas = [2, 3, 4],
monedas = [1, 5, 10],
cantidadbilletes = [2, 3, 4],
billetes = [10, 20, 50],
totalmonedas=[], totalbilletes=[], totalmon=0, totalbi=0, total=0;

for(let i=0; i<3; i++){
    totalmonedas[i]=cantidadmonedas[i]*monedas[i];
    totalbilletes[i]=cantidadbilletes[i]*billetes[i];
}

for(let i=0; i<3; i++){
    totalmon=totalmon+totalmonedas[i];
    totalbi=totalbi+totalbilletes[i];
}

total=totalmon+totalbi;

console.log(`En total tiene ${total} soles`);

