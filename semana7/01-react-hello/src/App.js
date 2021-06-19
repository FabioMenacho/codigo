import React from "react";
import Footer from "./Footer";
import Receta from "./Receta";
import Header from "./Header";


const App = () => {

  // componente se puede colocar como innerHTML
  let titulo = <h1>Recetas</h1>;

  // arreglo de platos que se manda como props de Recetas
  let platos = [
    {
      nombre: "Menestrón",
      ingredientes: ["Albahaca", "Espinaca", "Fideos"],
    },
    {
      nombre: "Cebiche",
      ingredientes: ["Pescado", "Limón", "Cebolla"],
    },
    {
      nombre: "Chupe de camarones",
      ingredientes: ["Camarones", "Leche", "Queso"],
    },
  ]

  // se crea una variable combinada entre js y html
  // let lis = cebiche.ingredientes.map((ingrediente)=>{
  //   return <li>{ingrediente}</li>;
  // });

  return (
    <div className="borde">
      {/* mando el props */}
      <Header texto={"El logo de la App"} fecha={"17-06-2021"} />
      <hr />
      <main>
        {titulo}
        {/* props puede ser un objeto, arreglo, función, etc */}
        {
          platos.map((objPlato)=>{
            // podemos colocarle un key igual a su nombre
            return <Receta plato={objPlato} key={objPlato.nombre}/>;
          })
        }
      </main>
      {/* <Footer></Footer> */}
      <Footer />
    </div>
  )
}

export default App;