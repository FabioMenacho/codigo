import React from 'react'

const Carrito = (props) => {

    // Calculando el total de produtos
    let sumatoria = props.canasta.reduce((sumatoriaPrevia, objActual)=>{
        return sumatoriaPrevia + objActual.cantidad;
    },0);


    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            Elementos en el carrito: {sumatoria}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    props.canasta.map((objProducto) => {
                        return (
                            <div className="col-md-2" key={objProducto.id}>
                                <div className="card">
                                    <div className="card-body">{objProducto.title} - {objProducto.cantidad}
                                    </div>
                                </div>
                            </div>)
                    })
                }




            </div>
        </>
    )
}

export default Carrito
