// path es una libreria nativa para trabajar con las rutas del sistema de archivo
const path = require("path");

module.exports = {
    // lo volvemos objeto
    entry: {
        main: "./src/index.js",
        nosotros: "./src/nosotros.js"
    },  
    
    // production es el otro formato más dificil
    mode: "development",
    output: {
        // resolve es para juntar varios string
        // __dirname es la carpeta de trabajo actual
        path: path.resolve(__dirname, "dist"),
        // [name] es el comodin del nombre de la propiedad del atributo entry, osea para las salidas va tomar los nombres de las entradas
        filename: "[name].js"
    }
};

