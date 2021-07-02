import React from 'react'
import search from "./../assets/search.svg"

const SideBarLeft = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="card border1 mt-3 bg-cards ">
                    <div className="d-flex flex-row flex-wrap">
                        <figure className="circulo-verde">
                            <img src={search} alt="" className="img-fluid rounded-circle" />
                        </figure>
                        <div className="card-body">
                            <p className="hijo-1 text-light"> <strong>Fabio Menacho Landa</strong></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="card border1 mt-3 bg-cards ">
                    <h5 className="text-light ms-3">Socios</h5>
                    <div className="d-flex flex-row flex-wrap">
                        <figure className="cuadrado">
                            <img src={search} alt="" className="img-fluid" />
                        </figure>
                        <div className="card-body">
                            <p className="text-light">Fabio Menacho Landa</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap">
                        <figure className="cuadrado">
                            <img src={search} alt="" className="img-fluid" />
                        </figure>
                        <div className="card-body">
                            <p className="text-light">Fabio Menacho Landa</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row flex-wrap">
                        <figure className="cuadrado">
                            <img src={search} alt="" className="img-fluid" />
                        </figure>
                        <div className="card-body">
                            <p className="text-light">Fabio Menacho Landa</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="card border1 mt-3 bg-cards ">
                    <h5 className="text-light ms-3">Recién visto</h5>
                    <div className="d-flex flex-row justify-content-around flex-wrap">
                        <figure className="cuadrado2">
                            <img src={search} alt="" className="img-fluid" />
                        </figure>
                        <figure className="cuadrado2">
                            <img src={search} alt="" className="img-fluid" />
                        </figure>
                        <figure className="cuadrado2">
                            <img src={search} alt="" className="img-fluid" />
                        </figure>
                        <figure className="cuadrado2">
                            <img src={search} alt="" className="img-fluid" />
                        </figure>
                        <figure className="cuadrado2">
                            <img src={search} alt="" className="img-fluid" />
                        </figure>
                        <figure className="cuadrado2">
                            <img src={search} alt="" className="img-fluid" />
                        </figure>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBarLeft
