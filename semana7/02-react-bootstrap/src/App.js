import React from "react";
import Header from "./components/Header.js";
import { noticias } from "./data/noticias.js";
import Noticia from "./components/Noticia.js";


const App = () => {
  console.log(noticias);
  return (
    <>
      <Header />



      <main className="container">
        <div className="row">

          <h1 className="display-3">Noticias App</h1>
        </div>

        <section className="row">

          {
            noticias.map((objNoticia, i) => {
              // noti es una props
              return <Noticia key={i} noti={objNoticia} />
            })
          }
        </section>

      </main>
    </>
  );
}

export default App;
