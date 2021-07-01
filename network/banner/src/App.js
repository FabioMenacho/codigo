import React from "react";
import Header from "./components/Header";
import SideBarLeft from "./components/SideBarLeft";
import SideBarRight from "./components/SideBarRight";
import Central from "./components/Central";

function App() {
  return (
    <main>
      <Header />
      <hr className="hr"/>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 bg-fondo">            
              <SideBarLeft />            
          </div>
          <div className="col-6 bg-fondo">            
              <Central/>   
          </div>
          <div className="col-3 bg-fondo">            
              <SideBarRight />            
          </div>
        </div>
      </div>



    </main >
  );
}

export default App;