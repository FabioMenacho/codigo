import React from "react";
import Contador from "./components/Contador";
import Aleatorio from "./components/Aleatorio";
import AleatorioArreglo from "./components/AleatorioArreglo";

const App = () => {
  return (
    <div>
      <Contador />
      <hr />
      <Aleatorio min={20} max={60} />
      <hr />
      <AleatorioArreglo min={100} max={120} />

    </div>
  )
}

export default App;
