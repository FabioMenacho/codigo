import React from 'react'

const Producto = (props) => {
    return (
        <div className="col-md-3">
            <div className="card">
                <img src={props.prod.image} alt="" className="card-img-top" />
                <div className="card-body">
                    <h4 className="card-title">{props.prod.title}</h4>
                    <p className="card-text">{props.prod.description}</p>
                    <p className="card-text text-success">{props.prod.price}</p>
                    <button className="btn btn-outline-success">Al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Producto
