import React from 'react'

const Header = () => {
    return (

        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-fondo">
                <div className="container-fluid">
                    <div className="col-3">
                        <a className="navbar-brand text-light icons ms-3" href="!#"><strong>NETWORK</strong></a>
                    </div>
                    <div className="col-1 text-center nav-item">
                        <a className="nav-link icons text-light" href="!#"><i class="fas fa-home    "></i></a>
                    </div>
                    <div className="col-1 text-center nav-item">
                        <a className="nav-link icons text-light" href="!#"><i class="fas fa-project-diagram"></i></a>
                    </div>
                    <div className="col-1 text-center nav-item">
                        <a className="nav-link icons text-light" href="!#"><i class="fas fa-business-time"></i></a>
                    </div>
                    <div className="col-1 text-center nav-item">
                        <a className="nav-link icons text-light" href="!#"><i class="fas fa-id-badge"></i></a>
                    </div>
                    <div className="col-1 text-center nav-item">
                        <a className="nav-link icons text-light" href="!#"><i class="fas fa-bell"></i></a>
                    </div>
                    <div className="col-1 text-center nav-item">
                        <a className="nav-link icons text-light" href="!#"></a>
                    </div>
                    <form className="col-2 nav-item">
                        <input className="form-control border1" type="search" placeholder="Buscar" />
                    </form>
                    <div className="col-1 text-center nav-item">
                        <a className="nav-link icons text-light" href="!#"><i class="fas fa-bullhorn"></i></a>
                    </div>
                </div>
            </nav>
            <hr className="hr" />
        </div>
    )
}

export default Header