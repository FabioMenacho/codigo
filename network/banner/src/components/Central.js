import React from 'react'
import search from "./../assets/search.svg"
import Carousel from './Carousel'


const Central = () => {
    return (
        <>

            <div className="container-fluid border1 mt-3">
                <div className="row py-4 px-2 d-flex">

                    <Carousel />


                    {/* <div className="col-md-4">
                        <figure className="d-flex justify-content-center my-auto">
                            <img src={search} alt="" className="my-auto border border-primary border-2 border1 img-fluid" />
                        </figure>
                    </div>
                    <div className="col-md-4">
                        <figure className="d-flex justify-content-center my-auto">
                            <img src={search} alt="" className="my-auto border border-primary border-2 border1 img-fluid" />
                        </figure>
                    </div>
                    <div className="col-md-4">
                        <figure className="d-flex justify-content-center my-auto">
                            <img src={search} alt="" className="my-auto border border-primary border-2 border1 img-fluid" />
                        </figure>
                    </div> */}

                </div>
            </div>

            <div className="container-fluid border1 mt-3 bg-cards">
                <div className="row p-3">
                    <div className="col-1">
                        <figure className="d-flex justify-content-center my-auto rounded-circle">
                            <img src={search} alt="" className="my-auto rounded-circle border border-success border-2" style={{ maxHeight: "40px" }} />
                        </figure>
                    </div>
                    <form className="col-11">
                        <input className="form-control border1" type="search" placeholder="¿Qué has hecho ultimamente?" />
                    </form>
                </div>
            </div>

            <div className="container-fluid border1 mt-3 bg-cards pt-1 pb-1">
                <div className="row p-3">
                    <div className="col-1 d-flex justify-content-center my-auto">
                        <figure className="d-flex justify-content-center my-auto rounded-circle">
                            <img src={search} alt="" className="my-auto rounded-circle border border-success border-2" style={{ maxHeight: "40px" }} />
                        </figure>
                    </div>
                    <div className="col-11 my-auto align-items-center">
                        <p className="text-light my-auto"><strong>Fabio Menacho Landa</strong></p>
                        <p className="text-light my-auto text-muted">Hace 1 hora</p>
                    </div>
                    <div className="col card-body">
                        <p className="text-light text-break">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore ratione vero. Porro aperiam aspernatur, ut exercitationem iste nihil impedit, ducimus amet nemo voluptatibus possimus consequatur accusantium tempore temporibus alias!
                        </p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <figure className="d-flex justify-content-center my-auto">
                                <img src={search} alt="" className="my-auto border border-primary border-2 border1 img-fluid" />
                            </figure>
                        </div>
                        <div className="btn-group w-100 mt-0 mx-auto" role="group" aria-label="Basic outlined example">
                            <button type="button" class="btn btn-outline-primary">230 interesados</button>
                            <button type="button" class="btn btn-outline-primary">65 comentarios</button>
                        </div>
                        <div class="btn-group w-100 mt-3 mx-auto" role="group" aria-label="Basic example">
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
