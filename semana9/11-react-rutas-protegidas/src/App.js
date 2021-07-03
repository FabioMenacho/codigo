import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import AdminRouter from "./modulos/admin/AdminRouter";
import CarritoRouter from "./modulos/carrito/CarritoRouter";
import CatalogoRouter from "./modulos/catalogo/CatalogoRouter";
import HomeRouter from "./modulos/home/HomeRouter";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <Router>
      {/* El header aparecen en las rutas principales */}
      <Switch>
        {/* se ponen las principales porque quizá en las sub-rutas se quiere otro Header */}
        <Route path="/catalogo" component={CatalogoRouter}/>
        <Route path="/carrito" component={CarritoRouter}/>
        {/* Para proteger el admin reemplazo el Route de Admin */}
        <PrivateRoute path="/admin" component={AdminRouter}/>
        {/* <Route path="/admin" component={AdminRouter}/> */}

        {/* el exact siempre para el más general osea para el / */}
        <Route exact path="/" component={HomeRouter}/>
        {/* Si no encuentra la ruta lo redirecciona al home */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
