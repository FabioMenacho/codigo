import React from 'react'
import network from "./../assets/NETWORK.jpg"

const Header = () => {
    return (
        <>
            <div className="container-fluid d-none d-md-block">
                <nav className="navbar navbar-expand-lg navbar-dark bg-fondo">
                    <div className="container-fluid">
                        <div className="col-3">
                            <a className="navbar-brand" href="!#">
                                <img src={network} alt="marca" className="img-fluid" style={{ maxHeight: "50px" }} />
                            </a>
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

                        <div className="col-1 text-center nav-item"></div>

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

            <div className="container-fluid d-md-none">
                <nav className="navbar navbar-expand-lg navbar-dark bg-fondo">
                    <div className="container-fluid">
                        <div className="col-6">
                            <a className="navbar-brand col" href="!#">
                                <img src={network} alt="marca" className="img-fluid" style={{ maxHeight: "50px" }} />
                            </a>
                        </div>

                        <div className="col-2 text-center nav-item">
                            <a className="nav-link icons text-light" href="!#"><i class="fas fa-bullhorn"></i></a>
                        </div>

                        <div className="col-2 text-center nav-item d-lg-none">
                            <a className="nav-link icons text-light" href="!#"><i class="fas fa-search"></i></a>
                        </div>

                        <div className="col-2 text-center nav-item d-lg-none">
                            <a className="nav-link icons text-light" href="!#"><i class="fas fa-comment"></i></a>
                        </div>

                        <div className="col-2 text-center nav-item">
                            <a className="nav-link icons text-light" href="!#"><i class="fas fa-home    "></i></a>
                        </div>
                        <div className="col-2 text-center nav-item">
                            <a className="nav-link icons text-light" href="!#"><i class="fas fa-project-diagram"></i></a>
                        </div>
                        <div className="col-2 text-center nav-item">
                            <a className="nav-link icons text-light" href="!#"><i class="fas fa-business-time"></i></a>
                        </div>
                        <div className="col-2 text-center nav-item">
                            <a className="nav-link icons text-light" href="!#"><i class="fas fa-id-badge"></i></a>
                        </div>
                        <div className="col-2 text-center nav-item">
                            <a className="nav-link icons text-light" href="!#"><i class="fas fa-bell"></i></a>
                        </div>
                        <div className="col-2 text-center nav-item dropdown">
                            <a className="nav-link dropdown-toggle icons text-light" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-bars"></i></a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="!#">Action</a></li>
                                <li><a className="dropdown-item" href="!#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="!#">Something else here</a></li>
                            </ul>
                        </div>
                        
                            {/* <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="!#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="!#">Action</a></li>
                                    <li><a className="dropdown-item" href="!#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="!#">Something else here</a></li>
                                </ul>
                            </div> */}
                        
                    </div>
                </nav>
                <hr className="hr" />
            </div>


        </>
    )
}

export default Header