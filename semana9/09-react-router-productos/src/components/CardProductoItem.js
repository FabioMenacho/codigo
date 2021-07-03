import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { eliminarProductoDelCarrito } from '../redux/actions/carritoActions';

const CardProductoItem = ({objProducto}) => {
    const dispatch = useDispatch();
    // viene del dispatch
    const categoriaState= useSelector((state)=>state.categoria)

    const eliminarProducto = () => {
        dispatch(eliminarProductoDelCarrito(objProducto));
    }


    return (
        <div className="card mb-3 shadow border-0">
                    <div className="card-body d-flex justify-content-between">
                        <figure>
                            <img src={objProducto.imagen} alt="" style={{maxHeight: "100px"}} />
                        </figure>
                        <div className="d-flex flex-column">
                            <h2>{objProducto.nombre}</h2>
                            {/* <p>{objProducto.descripcion.substring(0,15)}...</p> */}
                            {/* se ve en la pantalla redux y retorna el objeto categoria.nombre*/}
                            <p>{categoriaState.categorias.find((objCategoria)=> +objProducto.categoria_id === +objCategoria.id).nombre}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <strong>{objProducto.cantidad}</strong>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <strong>S/. {(objProducto.cantidad*objProducto.precio).toFixed(2)}</strong>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <strong className="btn btn-danger" onClick={eliminarProducto}>Eliminar</strong>
                        </div>
                    </div>
                </div>
    )
}

export default CardProductoItem
