// OBJETOS EN JS

let cpu = {
  ram: 16,
  nucleos: 8,
  discoSolido: "1Tb",
  enfriamientoLiquido: false,
};
console.log(cpu);

// modificando una característica del objeto
// cpu.ram = 8;
cpu["ram"] = 8;
console.log(cpu);

//
let plato = {
  nombre: "Asado de tira",
  precio: 39.0,
  ingredientes: ["Carne de res", "papas", "legumbres"],
};

// ¿Como agregar un ingrediente al objeto plato?

plato.ingredientes.push("chorizo");
plato.ingredientes[0] = "corte asado de tira";
console.log(plato);

//
let objTrabajador = {
  datosPersonales: {
    nombre: "Fabio",
    apellido: "Menacho Landa",
    edad: 38,
  },
  cargo: "developer",
  sueldo: 950.0,
};

//¿Como agregar un atributo a un objeto?
objTrabajador.datosPersonales.telefono = "987656789";
console.log(objTrabajador);

//
let ajiGallina = {
  imprimirIngredientes: function (){
    console.log("listando los ingredientes");
    for(let i=0; i<ajiGallina.ingredientes.length;i++){
      console.log(`${ajiGallina.ingredientes[i].cant} ${ajiGallina.ingredientes[i].um} de ${ajiGallina.ingredientes[i].nombre}`);
  }
  },
  // Efectuar la función para agregar ingredientes
  agregarIngredientes: function (unidadMedida, cantidad, nombre) {
    let objetoIngrediente={
      nombre: nombre,
      um: unidadMedida,
      cant: cantidad,
    }
    ajiGallina.ingredientes.push(objetoIngrediente);

  },
  
  nombre: "Aji de gallina",
  precio: 12.0,
  ingredientes: [
    {
      nombre: "Gallina",
      um: "pechuga",
      cant: 1,
    },
    {
      nombre: "aji amarillo",
      um: "gramo",
      cant: 200,
    },
  ],
}

ajiGallina.imprimirIngredientes();

ajiGallina.agregarIngredientes("unidades", "7", "aceituna");
ajiGallina.agregarIngredientes("unidades", "5", "huevos");

ajiGallina.imprimirIngredientes();