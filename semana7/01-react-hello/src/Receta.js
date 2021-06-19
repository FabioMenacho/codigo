import React from 'react'

const Receta = (props) => {

    // let cebiche = {
    //     nombre: "Cebiche",
    //     ingredientes: ["Pescado", "Limón","Cebolla"],
    //   };
      
    return (
        <section>
          <h2>{props.plato.nombre}</h2>
          <p className="texto-rojo">Ingredientes:</p>
          <ul>
            {
              // los ingredientes se pueden repetir asi que le ponemos la variable i del contador
            props.plato.ingredientes.map((ingrediente,i)=>{
            return <li key={i}>{ingrediente}</li>;
            })
            }
          </ul>
        </section>
    )
}

export default Receta
