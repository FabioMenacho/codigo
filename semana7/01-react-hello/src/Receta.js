import React from 'react'

const Receta = () => {

    let cebiche = {
        nombre: "Cebiche",
        ingredientes: ["Pescado", "Limón","Cebolla"],
      };
      
    return (
        <section>
          <h2>{cebiche.nombre}</h2>
          <p>Ingredientes:</p>
          <ul>
            {
            cebiche.ingredientes.map((ingrediente)=>{
            return <li>{ingrediente}</li>;
            })
            }
          </ul>
        </section>
    )
}

export default Receta
