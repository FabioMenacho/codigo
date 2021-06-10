const getDiaCastellano = (numero) => {
    return new Promise ((resolve, reject) => {
        let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
        setTimeout(() => {
            if(numero >=0 && numero<=6){
                resolve(dias[numero]);
            } else {
                reject("Error en el número de día");
            }
        },2000);
    });
};


const getDiaIngles = (numero) => {
    return new Promise ((resolve, reject) => {
        let dias = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        setTimeout(() => {
            if(numero >=0 && numero<=6){
                resolve(dias[numero]);
            } else {
                reject("Error en el número de día");
            }
        },2000);
    });
};

// Obtener el nombre de la semana en castellano y sí y solo sí funciona en castellano obtener el mismo valor en inglés

getDiaCastellano(3).then((diaCastellano)=> {
    console.log(diaCastellano);
    return getDiaIngles(1);
}).then((diaIngles) => {
    console.log(diaIngles);
}).catch((error) => {
    console.log(error);
});