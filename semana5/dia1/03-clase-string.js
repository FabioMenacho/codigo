
// A continuación una serie de propiedades de la clase string (cadenas de texto)
let frase = "Los programadores crean lo que las personas sueñan"

// retorna la cantidad de caracteres que tiene un string
console.log(`Cantidad de caracteres: ${frase.length}`);

// Retorna la misma frase en mayúscula, transforma no cambia el estado original
console.log(`${frase.toUpperCase()}`);

// Retorna la misma frase en minúscula, transforma no cambia el estado original
console.log(`${frase.toLowerCase()}`);

// Retorna un arreglo de strings dado un separador
let resultadoSplit = frase.split(" ");
console.log(resultadoSplit);

// Retorna la posición en la que inicia el termino buscado dentro de la cadena de texto
console.log(frase.indexOf("crean"));

// Cuando la palabra o el término buscado no existe, el retorno es -1
console.log(frase.indexOf("puerta"));

// Retorna la misma cadena de texto sin los espacios de los extremos
// Los espacios en blanco internos no cuentan
let email = "fabio_m_82@yahoo.es         ";
let password = "         123456";
console.log(email.trim());
console.log(password.trim());


// Reemplaza el primer término con el segundo termino en cada lugar donde lo encuentra, solo reemplaza el primero que encuentra
let resultadoReplace = frase.replace("ñ", "ni");
console.log(resultadoReplace);

let resultadoReplace2 = frase.replace(" ","");
console.log(resultadoReplace2);

// Reemplaza todos los que encuentra
let resultadoReplace3 = frase.replace(/\s/g,"");
console.log(resultadoReplace3);


// cadena.substr(posicion_inicial,cantidad_de_caracteres) 
// Retorna una subcadena de la cadena inicial que inicia en la "posicion inicial" y a partir de ese punto con tamos "cantidad de caracteres"
let subcadena = frase.substr(4,6);
console.log(subcadena);