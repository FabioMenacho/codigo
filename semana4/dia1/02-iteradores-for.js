// ciclo for

// for (let i=0; i<10; i++){
//     console.log(`valor de i: ${i}`);
// i no debe ser alterada manualmente
// }

// Leer 4 notas y obtener el pormedio de ellas

// let suma = 0,
//   promedio = 0;
// for (let i = 0; i < 4; i++) {
//   suma = suma + +prompt(`Ingrese la nota ${i + 1}`);
// }
// promedio = suma / 4;

// console.log(`El promedio es: ${promedio}`);

// Ejercicio: dadps 2 números a y b calcular la multiplicación de ambos sin hacer uso del simbolo * solo se pueden usar sumas sucesivas

// let a=10, b=8, m=0;

// for(let i=0; i<b; i++){
//     m=a+m;
// }

// console.log(`La multiplicación es: ${m}`);

// Con un ciclo for simular la tabla de multiplicar de un número x
// La tabla debe ir del 0 al 12

// let x=10, m=0;

// for(let i=0; i<13; i++){
//     m=x*i;
//     console.log(`${x} x ${i} = ${m}`);
// }

// Mejore el ejercicio anterior para mostrar la tabla de los N primeros número naturales

// let N = 2,
//   m = 0;

// for (let i = 0; i < N + 1; i++) {
//   for (let j = 0; j < 13; j++) {
//     m = j * i;
//     console.log(`${i} x ${j} = ${m}`);
//   }
// }

// Recorriendo arreglos

let edades = [35, 73, 45, 12, 4, 54, 63, 40, 13, 26];

// para devolver la cantida de elementos de un arreglo

// console.log(`Elementos del arreglo: ${edades.length}`);
// console.log(`Primer elemento de un  arreglo: ${edades[0]}`);
// console.log(`Último elemento de un  arreglo: ${edades[edades.length - 1]}`);

// for(let i=0; i<edades.length; i++){
//     console.log(edades[i]);
// }

// Solo se pueden vacunar las personas que tengan una edad mayor a 60 años
// Imprimir las edades aptas
for (let i = 0; i < edades.length; i++) {
  if (edades[i] > 60) {
    console.log(`Apto con edad de ${edades[i]} años`);
  }
}

