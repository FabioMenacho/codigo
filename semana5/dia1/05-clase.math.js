
// Ejemplo de método estático
// Cuando un método es estático se puede invocarlo sin necesidad de crear un objet de la clase a la que pertenece

class Utils{
    static valorDePi(){
        return 3.1415;
    }
}

console.log(Utils.valorDePi());

// La clase Math tiene muchos métodos estáticos en su interior que podemos usar sin necesidad de instanciar objetos

// Raíz cuadrada
console.log(`Raiz cuadrada de 81 = ${Math.sqrt(81)}`);

// Redondear
console.log(`Redondeando 4.85 = ${Math.round(4.85)}`);

// Techo de un número
console.log(`Techo de 4.01 = ${Math.ceil(4.01)}`);

// piso de un número
console.log(`Techo de 4.99 = ${Math.floor(4.99)}`);

// Obtener un número aleatorio entre 50 y 100
let aleatorio = Math.random()*(100-50)+50;
console.log(aleatorio);

// Propiedad de los numbers para redondear o aplicar decimales a un número determinado
console.log(aleatorio.toFixed(2));