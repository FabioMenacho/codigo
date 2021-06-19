import React from 'react'

const Carrito = (props) => {
    return (
        <>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        Elementos en el carrito: {props.canasta.length}
                    </div>
                </div>
            </div>
        </div>
            <div className="row">
                <div className="col-md-2">
                    <div className="card">
                        <div className="card-body">Producto 1</div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <div className="card-body">Producto 2</div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="card">
                        <div className="card-body">Producto 3</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carrito
