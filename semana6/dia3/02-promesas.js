// Creación de una promesa
// Se usa resolve para devolver una respuesta exitosa en la promesa
// Se usa reject para retornar una respuesta fallida en la promesa 

const miPromesa = new Promise((resolve, reject) => {
    // En el desarrollo de una promesa podemos ejecuta procesos asíncronos y cuando estos terminen retornar los resultados
    setTimeout(() => {
        let rpta = 10;
        if (rpta === 100) {
            resolve(rpta);
        } else {
            reject("Error, no es 100");
        };

    }, 2000);
});



// El consumo de una promesa
// Se consume una promesa con el uso de las funciones then, catch y finally
// Se usa then para recibir lo que retorna resolve
// Se usa catch para recibir lo que retorna reject

miPromesa.then((rpta) => {
    console.log(rpta);
}).catch((rpta) => {
    console.log(rpta);
});


// Creando una función que retorne una promesa

const getCoordenadas = (ciudad) => {
    let miPromesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ciudad === "") {
                reject("No se recibio la ciudad")
            } else {
                resolve([-16.5783, -70.8734]);
            };
        }, 2000);
    });
    return miPromesa;
};

// getCoordenadas devuelve una promesa
getCoordenadas("Lima").then((rpta) => {
    console.log(rpta);
}).catch((rpta) => {
    console.log(rpta);
});