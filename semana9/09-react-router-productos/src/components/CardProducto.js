import React from 'react'
import {useDispatch} from "react-redux"
import { agregarProductoAlCarrito } from '../redux/actions/carritoActions';

const CardProducto = ({objProducto}) => {
    const dispatch = useDispatch();

    const agregarProducto = () => {
        // dispatch sirve para comunicarse directamente con el reducer
        dispatch(agregarProductoAlCarrito(objProducto));
    }

    return (
        <div className="col-md-3" key={objProducto.id}>
                        <div className="card">
                            <img src={objProducto.imagen} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h4 className="card-title">{objProducto.nombre}</h4>
                                <p className="card-text">{objProducto.descripcion}</p>
                                <p className="card-text">{objProducto.precio}</p>
                                <p>
                                    <button className="btn btn-outline-info" onClick={agregarProducto}>Agregar al carrito</button>
                                </p>
                            </div>
                        </div>
                    </div>
    )
}

export default CardProducto
