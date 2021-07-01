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
                <div className="d-flex flex-row flex-wrap">
                    <figure className="circulo-verde">
                        <img src={search} alt="" className="img-fluid rounded-circle" />
                    </figure>
                    <div className="card-body">
                        <p className="hijo-1 text-light"> <strong>Fabio Menacho Landa</strong></p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Central
