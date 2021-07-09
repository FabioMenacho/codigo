import React from "react"
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import PosRouter from "./modulos/pos/PosRouter"
import {Provider} from "react-redux"
import { store } from "./redux/store/store"

const App=()=> {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
            <Route path="/pos" component={PosRouter} />
            {/* para que la actualizar nos redireccione a esta pagina, solo por ahora */}
            <Redirect to="pos/pos"/>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
