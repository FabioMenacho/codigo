import React from 'react'
import search from "./../assets/search.svg"

const SideBarLeft = () => {
    return (
        <>
            <div className="container-fluid border1 mt-3 bg-cards py-1">
                <div className="d-flex align-items-center py-3">
                    <div className="d-flex">
                        <figure className="d-flex align-items-center my-auto rounded-circle">
                            <img src={search} alt="" className="my-auto rounded-circle border border-success border-2" style={{ maxHeight: "40px" }} />
                        </figure>
                    </div>
                    <div className="d-flex my-auto align-items-center ms-2">
                        <p className="text-light my-auto"> <strong>Fabio Menacho Landa</strong></p>
                    </div>
                </div>
            </div>

            {/* <div className="container-fluid">
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
            </div> */}

            <div className="container-fluid border1 mt-3 bg-cards">
                <div className="row">
                    <div className="d-flex justify-content-between p-2">
                        <h5 className="text-light my-auto">Socios</h5>
                        <p className="text-light my-auto">Ver más...</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="d-flex mb-3">
                        <div className="d-flex">
                            <figure className="d-flex justify-content-center align-items-center my-auto">
                                <img src={search} alt="" className="my-auto border border-primary border-2" style={{ maxHeight: "40px" }} />
                            </figure>
                        </div>
                        <div className="col-md-10 my-auto align-items-center ms-2">
                            <p className="text-light my-auto">Fabio Menacho Landa</p>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="d-flex">
                            <figure className="d-flex justify-content-center align-items-center my-auto">
                                <img src={search} alt="" className="my-auto border border-primary border-2" style={{ maxHeight: "40px" }} />
                            </figure>
                        </div>
                        <div className="col-md-10 my-auto align-items-center ms-2">
                            <p className="text-light my-auto">Fabio Menacho Landa</p>
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="d-flex">
                            <figure className="d-flex justify-content-center align-items-center my-auto">
                                <img src={search} alt="" className="my-auto border border-primary border-2" style={{ maxHeight: "40px" }} />
                            </figure>
                        </div>
                        <div className="col-md-10 my-auto align-items-center ms-2">
                            <p className="text-light my-auto">Fabio Menacho Landa</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid border1 mt-3 bg-cards">
                <div className="row">
                    <div className="d-flex justify-content-between p-2">
                        <h5 className="text-light my-auto">Recién vistos</h5>
                        <p className="text-light my-auto">Ver más...</p>
                    </div>
                </div>
                <div className="row pt-1">
                    <div className="col-lg-6">
                        <figure>
                            <img src={search} alt="" className="my-auto border border-primary border-2 border1 img-fluid" style={{ maxHeight: "100px" }} />
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <img src={search} alt="" className="my-auto border border-primary border-2 border1 img-fluid" style={{ maxHeight: "100px" }} />
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <img src={search} alt="" className="my-auto border border-primary border-2 border1 img-fluid" style={{ maxHeight: "100px" }} />
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <img src={search} alt="" className="my-auto border border-primary border-2 border1 img-fluid" style={{ maxHeight: "100px" }} />
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <img src={search} alt="" className="my-auto border border-primary border-2 border1 img-fluid" style={{ maxHeight: "100px" }} />
                        </figure>
                    </div>
                    <div className="col-lg-6">
                        <figure>
                            <img src={search} alt="" className="my-auto border border-primary border-2 border1 img-fluid" style={{ maxHeight: "100px" }} />
                        </figure>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SideBarLeft
