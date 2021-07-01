import React from 'react'
import search from "./../assets/search.svg"

const Header = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-fondo">
            <div className="container-fluid">
                <div className="col-3">
                    <a className="navbar-brand text-light icons" href="!#"><strong>NETWORK</strong></a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse col-12" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0 col-12">
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active icons" href="!#"><i class="fas fa-home    "></i></a>
                        </div> 
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active icons" href="!#"><i class="fas fa-project-diagram"></i></a>
                        </div>
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active icons" href="!#"><i class="fas fa-business-time"></i></a>
                        </div>
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active icons" href="!#"><i class="fas fa-id-badge"></i></a>
                        </div>
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active icons" href="!#"><i class="fas fa-bell"></i></a>
                        </div>
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active" href="!#"></a>
                        </div>
                        <form className="col-2 nav-item">
                            <input className="form-control border1" type="search" placeholder="Buscar" />
                        </form> 
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active icons" href="!#"><i class="fas fa-bullhorn"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </nav>
        
    )
}

export default Header