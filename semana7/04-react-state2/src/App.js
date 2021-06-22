import React, {useEffect, useState} from "react";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
import { products } from "./data/products";

const App = () => {

  // const [canasta, setCanasta] = useState(canastals || []);
  const [canasta, setCanasta] = useState([]);

  


  useEffect(() => {
    let canastals = localStorage.getItem("canastals");
  if (canastals) {
    canastals = JSON.parse(canastals);
    setCanasta(canastals);
  }  
  console.log(canastals);

  }, [])
 



  const agregarAlCarrito = (objProducto) => {

    // Algoritmo para agregar un producto al carrito
    let copiaCanasta = [...canasta];
    // Buscar el producto que intentamos agregar para ver si existe en la canasta o agregamos un nuevo producto
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

    // copiaCanasta.push(objProducto);

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
  )
}

export default App;
