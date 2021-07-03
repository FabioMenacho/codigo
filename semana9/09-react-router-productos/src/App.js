import React, { useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header";
import Carrito from "./pages/Carrito";
import Productos from "./pages/Productos";
import { Provider, useDispatch, useSelector } from "react-redux";
// import { store } from "./redux/store/store";
import NavBar from "./components/NavBar";
import { cargarCategorias } from "./redux/actions/categoriaActions";

function App() {
  // Estados globales: Context y Redux
  // vamos a llamar a las categorias aca, en vez de page-productos para que sean de manera global con categoriaReducer xq es un estado global

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cargarCategorias());
  }, [])

  // Verificar si las categorias han terminado de cargar
  // el useSelector depende de la variable de estado este tambien se actualiza 
  // Se pone state.categoria porque en store tenemos 2 reucer, categoria y carrito
  const categoriasState = useSelector((state) => state.categoria)
  // se imprime 4 veces: 1. el estado inicial (vacio), 2. usamos el dispatch SET_CATEGORIAS_CARGANDO 3. llega la data 4. cuando carga y cambia a false
  console.log(categoriasState);
  if (categoriasState.cargando) {
    return <h1 className="display-4">Cargando categorias...</h1>
  } else {
    return (
      // cambie el provider al index xq el dispatch que uso arriba no se podría usar
      
      // <Provider store={store}>
      <div>
        <Router>
          <div className="d-flex">
            <Header />
            <main className="container-fluid">
              <NavBar />
              <Switch>
                <Route path="/productos" component={Productos} />
                <Route path="/carrito" component={Carrito} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
      // </Provider>
    );
  }

}



export default App;
