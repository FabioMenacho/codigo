import React from 'react'
import search from "./../assets/search.svg"
import Carousel from './Carousel'


const Red = () => {
    return (
        <>
            <div className="container-fluid border1 mt-3 bg-cards">
                <div className="row p-3">
                    <div className="col-6 card-body my-auto">
                        <p className="text-light my-auto mb-2"><strong>Empresa</strong></p>
                        <p className="text-light text-break">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit dolore ratione vero. Porro aperiam aspernatur, ut exercitationem iste nihil impedit, ducimus amet nemo voluptatibus possimus consequatur accusantium tempore temporibus alias!
                        </p>
                    </div>
                    <div className="col-6">
                        <figure className="d-flex justify-content-center my-auto">
                            <img src={search} alt="" className="my-auto border border-primary border-2 border1 w-100" style={{ maxHeight: "250px" }} />
                        </figure>
                    </div>

                </div>
            </div>

            <div className="overflow-auto rubros" style={{ maxHeight: "250px" }}>
                <div className="container-fluid border1 mt-3">
                    <div className="p-1">
                        <p className="text-light m-2 ms-3"><strong>Rubro</strong></p>
                    </div>

                    <div className="row p-3 d-fex">
                        <Carousel />
                    </div>
                </div>                
                <div className="container-fluid border1 mt-3">
                    <div className="p-1">
                        <p className="text-light m-2 ms-3"><strong>Rubro</strong></p>
                    </div>

                    <div className="row p-3 d-fex">
                        <Carousel />
                    </div>
                </div>
                <div className="container-fluid border1 mt-3">
                    <div className="p-1">
                        <p className="text-light m-2 ms-3"><strong>Rubro</strong></p>
                    </div>

                    <div className="row p-3 d-fex">
                        <Carousel />
                    </div>
                </div>


            </div>

        </>
    )
}

export default Red
