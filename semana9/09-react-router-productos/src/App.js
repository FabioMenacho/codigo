import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from "./components/Header";
import Carrito from "./pages/Carrito";
import Productos from "./pages/Productos";

function App() {
  // Estados globales: Context y Redux

  return (
    <div>
      <Router>
        <div className="d-flex">
        <Header/>
        <main className="container-fluid">
        <Switch>
          <Route path="/productos" component={Productos} />
          <Route path="/carrito" component={Carrito} />
        </Switch>
        </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
