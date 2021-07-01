import React from 'react'
import { useDispatch } from 'react-redux'

const Botones = () => {
    // para controlar todos los reducers usamos el useDispatch
    const dispatch = useDispatch();

    const agregar10lucas = () => {
        // este es el action
        dispatch({
            type:"AGREGAR_DINERO",
            payload: {
                monto: 10,
                mensaje: "Agregando 10 soles"
            }
        })
    }

    const restar10lucas = () => {
        // este es el action
        dispatch({
            type:"RESTAR_DINERO",
            payload: {
                monto: 10,
                mensaje: "Restando 10 soles"
            }
        })
    }

    return (
        <div>
            <button onClick={agregar10lucas}>Agregar 10 soles</button>
            <button onClick={restar10lucas}>Restar 10 soles</button>
        </div>
    )
}

export default Botones
