import React from 'react'

const Receta = () => {

    let platos = {
        nombre: "Cebiche",
        ingredientes: ["pescado", "limón", "sal", "cebolla", "aji"]
      }
    
      let lis = platos.ingredientes.map((ingrediente) => {
        return <li>{ingrediente}</li>
      })

    return (
        <section>
          <h2>{platos.nombre}</h2>
          <ul>{lis}</ul>
        </section>
    )
}

export default Receta
