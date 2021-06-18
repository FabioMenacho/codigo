import React from "react";
import Footer from "./Footer";
import Receta from "./Receta";
import Header from "./Header";

const App = () => {

  // componente se puede colocar como innerHTML
  let titulo = <h1>Recetas</h1>;

  // se crea una variable combinada entre js y html
  // let lis = cebiche.ingredientes.map((ingrediente)=>{
  //   return <li>{ingrediente}</li>;
  // });

  return (
    <div>
      {/* mando el props */}
      <Header texto="El logo de la App" fecha="17-06-2021" />
      <hr />
      <main>
        {titulo}
        <Receta />
        <hr />
        <Receta />
      </main>
      {/* <Footer></Footer> */}
      <Footer />
    </div>
  )
}

export default App;