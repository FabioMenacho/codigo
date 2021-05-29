// const no puede cambiar su valor inicial (de funcion a numero por ejemplo)
// funcion anónima
const suma = function (a, b){
    return a+b;
}

// 
const multiplicar = (a,b) => {
    return a*b;
}

console.log(`5 x 8 = ${multiplicar(5,8)}`);

// Las funciones anónimas pueden tener retornos implicitos si el desarrollo de la función tiene una línea de código
// Cuando queremos representar un retorno implícito, procurar encerrarlo en un símbolo de paréntesis
const dividir = (a,b) => (a/b);
console.log(`9 / 3 = ${dividir(9,3)}`);


// Si una función de flecha recibe 1 parámetro (exactamente 1) pueden obviarse los paréntesis que encierran ese parámetro
const cuadrado = n => n*n;
console.log(`Cuadrado de 9 = ${cuadrado(9)}`);


// Si una finción de flecha no recibe par+ametros, colocar la apertura y cierre de paréntesis
// Si la función de flecha solo tiene 1 línea de código de desarrollo, se pueden obviar las llaves
const saludar = () => console.log("Saludando!!!");
saludar();
