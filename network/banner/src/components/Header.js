import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="col-3">
                    <a className="navbar-brand text-light" href="!#">NETWORK</a>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse col-12" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0 col-12">
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active" href="!#">1</a>
                        </div>
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active" href="!#">2</a>
                        </div>
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active" href="!#">3</a>
                        </div>
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active" href="!#">4</a>
                        </div>
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active" href="!#">5</a>
                        </div>
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active" href="!#">6</a>
                        </div>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Buscar" />
                        </form>
                        <div className="col-1 text-center nav-item">
                            <a className="nav-link active" href="!#">7</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
