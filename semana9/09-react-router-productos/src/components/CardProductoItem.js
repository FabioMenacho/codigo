import React from 'react'

const CardProductoItem = ({objProducto}) => {
    return (
        <div className="card mb-3 shadow border-0">
                    <div className="card-body d-flex justify-content-between">
                        <figure>
                            <img src={objProducto.imagen} alt="" style={{maxHeight: "100px"}} />
                        </figure>
                        <div className="d-flex flex-column">
                            <h2>{objProducto.nombre}</h2>
                            <p>{objProducto.descripcion.substring(0,15)}...</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <strong>{objProducto.cantidad}</strong>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <strong>S/. {(objProducto.cantidad*objProducto.precio).toFixed(2)}</strong>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <strong className="btn btn-danger">Eliminar</strong>
                        </div>
                    </div>
                </div>
    )
}

export default CardProductoItem
