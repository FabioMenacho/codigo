import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nosotros from "./pages/Nosotros";
import Portafolio from "./pages/Portafolio";
import Contacto from "./pages/Contacto";
import Header from "./components/Header";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import ProyectoDetalle from "./pages/ProyectoDetalle";

function App() {
  return (
    <Router>
      <Header/>    
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/nosotros" component={Nosotros}/>      
      {/* Proyecto_id no es la ruta es una variable (un nombre) por los 2 puntos*/}
      <Route path="/portafolio/:proyecto_id" component={ProyectoDetalle}/>
      <Route path="/portafolio" component={Portafolio}/>
      <Route path="/contacto" component={Contacto}/>
      <Route component={Error404}/>
      {/* Siempre debe ir al último sino exact*/}
      {/* <Route path="/" component={Home}/> */}
      </Switch>      

    </Router>

    
  );
}

export default App;
