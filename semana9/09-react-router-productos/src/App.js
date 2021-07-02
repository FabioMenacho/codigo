import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header";
import Carrito from "./pages/Carrito";
import Productos from "./pages/Productos";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import NavBar from "./components/NavBar";

function App() {
  // Estados globales: Context y Redux

  return (
    <Provider store={store}>
      <div>
        <Router>
          <div className="d-flex">
            <Header />
            <main className="container-fluid">
              <NavBar/>
              <Switch>
                <Route path="/productos" component={Productos} />
                <Route path="/carrito" component={Carrito} />
              </Switch>
            </main>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
