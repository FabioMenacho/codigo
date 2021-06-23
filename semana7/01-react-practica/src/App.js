import React, { useState, useEffect } from "react";
import { products } from "./data/products.js";
import Producto from "./components/Producto.js";
import Carrito from "./components/Carrito.js";

const App = () => {

  const [canasta, setCanasta] = useState([]);
  console.log(canasta);

  useEffect(() => {
    console.log("Inicio de useEffect");
    let canastals = localStorage.getItem("canastals");
    if (canastals) {
      canastals = JSON.parse(canastals);
      setCanasta(canastals);
    }
    // console.log(canastals);

  },[])

  const agregarAlCarrito = (objProducto) => {
    console.log("Inicio función agregarAlCarrito");
    let copiaCanasta = [...canasta];
    let productoEncontrado = copiaCanasta.find((producto) => {
      if (producto.id === objProducto.id) {
        return producto;
      }
    });
    if (productoEncontrado) {
      // El producto ya existia en la canasta
      console.log("El producto ya existía");
      productoEncontrado.cantidad++;

    } else {
      // el producto va a ser agregado por primera vez
      // console.log("El producto va a ser agregado por primera vez");
      // se hace copia y se agrega el campo cantidad al objeto
      copiaCanasta.push({ ...objProducto, cantidad: 1 });
    }

    localStorage.setItem("canastals", JSON.stringify(copiaCanasta))

    setCanasta(copiaCanasta);
  }

  return (
    <>
      <main className="container">
        <Carrito canasta={canasta} />

        <div className="row">
          <div className="col-12">
            <h1 className="display-5">Tienda app</h1>
          </div>
        </div>
        {/* Contenedor de los productos */}
        <div className="row">
          {
            products.map((objProducto, i) => {
              return <Producto agregarAlCarrito={agregarAlCarrito} prod={objProducto} key={i} />
            })
          }
        </div>
      </main>
    </>
  );
};

export default App;
