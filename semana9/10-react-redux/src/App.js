import React from "react";
import {Provider} from "react-redux"
import { store } from "./store/store";
import Botones from "./components/Botones";
import Informacion from "./components/Informacion";
import Formulario from "./components/Formulario";

function App() {
  return (
    <Provider store={store}>
      <div>
      <Botones/>
      <Informacion/>
      <hr />
      <Formulario/>
      </div>
    </Provider>
  );
}

export default App;
