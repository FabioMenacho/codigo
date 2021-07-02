import React from 'react'
import search from "./../assets/search.svg"

const Central = () => {
    return (
        <>
            <div className="card border1 mt-3 bg-cards ">
                <div className="d-flex flex-row justify-content-around flex-wrap">
                    <figure className="cuadrado3 mt-3">
                        <img src={search} alt="" className="img-fluid" />
                    </figure>
                    <figure className="cuadrado3 mt-3">
                        <img src={search} alt="" className="img-fluid" />
                    </figure>
                    <figure className="cuadrado3 mt-3">
                        <img src={search} alt="" className="img-fluid" />
                    </figure>
                    <figure className="cuadrado3 mt-3">
                        <img src={search} alt="" className="img-fluid" />
                    </figure>
                </div>
            </div>

            <div className="card border1 mt-3 bg-cards ">
                <div className="container-fluid d-flex flex-row flex-wrap justify-content-around align-items-center">
                    <figure className="circulo-verde-2 col-1">
                        <img src={search} alt="" className="img-fluid rounded-circle" />
                    </figure>
                    <form className="col-11 nav-item">
                        <input className="form-control border1" type="search" placeholder="¿Qué has hecho ultimamente?" />
                    </form>
                </div>
            </div>

            <div className="card border1 mt-3 bg-cards">
                <div className="d-flex flex-row flex-wrap align-items-center">
                    <div className="d-flex flex-row flex-wrap ancho1">
                        <figure className="circulo-verde-3">
                            <img src={search} alt="" className="img-fluid rounded-circle" />
                        </figure>
                        <div className="card-body">
                            <p className="hijo-1 text-light mb-0"><strong>Fabio Menacho Landa</strong></p>
                            <p className="hijo-1 text-light text-muted mt-0">Hace 1 hora</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <p className="text-light">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore ratione vero. Porro aperiam aspernatur, ut exercitationem iste nihil impedit, ducimus amet nemo voluptatibus possimus consequatur accusantium tempore temporibus alias!
                        </p>
                    </div>
                    <figure className="cuadrado4 mx-auto mb-0">
                        <img src={search} alt="" className="img-fluid" />
                    </figure>
                    <div className="row">
                        <div className="btn-group col mx-auto ms-5 me-5 mt-0" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">230 interesados</button>
                            <button type="button" class="btn btn-outline-primary">65 comentarios</button>
                        </div>
                        <div class="btn-group col mx-auto ms-5 me-5 mt-3 mb-3" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary">Me interesa</button>
                            <button type="button" class="btn btn-primary">Comentar</button>
                            <button type="button" class="btn btn-primary">Compartir</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Central
