import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-3 bg-light">
          <div className="row">
            <div className="col-12">
              Hola
            </div>
            <div className="col-12">
              Hola
            </div>
            <div className="col-12">
              Hola
            </div>
          </div>
        </div>
        <div className="col-6 text-light">
        <div className="row">
            <div className="col-12">
              Hola
            </div>
            <div className="col-12">
              Hola
            </div>
            <div className="col-12">
              Hola
            </div>
          </div>
        </div>
        <div className="col-3 bg-light">
          Hola
        </div>
      </div>
    </main>
  );
}

export default App;
