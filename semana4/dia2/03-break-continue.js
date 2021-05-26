// Sentencia BREAK vs CONTINUE
// BREAK: interrumpir todas las iteraciones que quedan por darse en una estructua repetitiva
// CONTINUE: interrumpir la iteración actual y salta automaticamente a la siguiente iteración

let numeros = [1, 2, -3, 4, 5, 7];

// Imprimir los números hasta encontrar un número negativo

// for (let i = 0; i < numeros.length; i++) {
//     if(numeros[i] >= 0){
//         console.log(numeros[i]);
//     }else{
//         break;
//     }    
// }

// Si un número es impar imprimirlo y en caso contrario salta a la siguiente sentencia

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0){
        continue;
    }    
    console.log(numeros[i]);
}