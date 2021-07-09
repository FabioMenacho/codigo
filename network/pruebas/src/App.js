import React from "react"
import "./styles/styles.css";
import "./styles/flickity.css";
import Carousel from "./components/Carousel";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function App() {
    return (
        <div className="App">
          {/* <h1>React Flickity</h1> */}
          {/* <Carousel /> */}
          <Dropdown/>
        </div>
      );
  }
  
  export default App;