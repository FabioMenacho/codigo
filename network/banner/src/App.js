import React from "react";
import Header from "./components/Header";
// import Headerb5 from "./components/Headerb5"
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import Central from "./components/Central";
import "./styles/styles.css";
import "./styles/flickity.css";
import "./styles/stylesBanner.css";

function App() {
  return (
    <main>
      <Header />      
      {/* <Headerb5/> */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 bg-fondo d-none d-md-block">            
              <SideBarLeft />            
          </div>
          <div className="col bg-fondo">            
              <Central/>   
          </div>
          <div className="col-3 bg-fondo d-none d-md-block">            
              <SideBarRight />            
          </div>
        </div>
      </div>



    </main >
  );
}

export default App;