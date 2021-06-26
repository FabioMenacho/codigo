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
  const [pagina, setpagina] = useState(1);
  const [totalProductos, setTotalProductos] = useState(0);

  const seleccionarCategoria = (id) =>{
    setCategoriaSeleccionada(id);
  }

  useEffect(() => {
    getProductos(0).then((rpta)=>{
      let cantidadTotal = rpta.data.length;
      setTotalProductos(cantidadTotal);
    });
  }, [])
  
  useEffect(() => {
    getCategorias().then((rpta)=>{
      getProductos(pagina).then((rpta2)=>{        
        setCategorias(rpta.data);
        setProductos(rpta2.data);
      })
    })

  }, [pagina])

  const siguientePagina = () => {
    if(pagina === Math.ceil(totalProductos/8)){
      return;
    }else{
      setpagina(pagina+1);
    }    
  }

  const atrasPagina = () => {
    if(pagina === 1){
      return;
    }else{
      setpagina(pagina-1);
    }    
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
        <div className="col-12 text-end">
            {/* pra verificar que solo pagina funciona con el useEffect */}
            <button className="btn btn-warning" onClick={atrasPagina}>
              Ver atrás {pagina-1}
            </button>
            {/* El onclick se manda asi xq no enviamos parámetros */}
            <button className="btn btn-primary" onClick={siguientePagina}>
              Ver adelante {pagina+1}
            </button>
          </div>
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
