import React, {useState, useEffect} from "react";
import Header from "./components/Header";
import {getCategorias} from "./services/categorias";
import {getProductos} from "./services/productos";
import Categorias from "./components/Categorias";
import Productos from "./components/Productos"

const App = () => {

  const [categorias, setCategorias] = useState([]);
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const seleccionarCategoria = (id) =>{
    setCategoriaSeleccionada(id);
  }

  useEffect(() => {
    getCategorias().then((rpta)=>{
      getProductos().then((rpta2)=>{        
        setCategorias(rpta.data);
        setProductos(rpta2.data);
      })
    })

  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Categorias categorias={categorias} seleccionarCategoria={seleccionarCategoria} categoriaSeleccionada={categoriaSeleccionada}/>
          </div>
          <div className="col-md-9">
            <Productos productos={productos} categoriaSeleccionada={categoriaSeleccionada}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
