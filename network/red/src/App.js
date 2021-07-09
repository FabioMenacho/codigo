import React from "react"
import Header from "./components/Header";
import Red from "./components/Red";
import "./styles/styles.css";
import "./styles/flickity.css";
import "./styles/stylesRed.css";

function App() {
  return (
    <main>
      <Header />
      <div className="container-fluid">
      <Red/>  
      </div>
    </main>


  );
}

export default App;
