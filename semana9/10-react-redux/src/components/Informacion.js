import React from 'react'
import { useSelector } from 'react-redux'

const Informacion = () => {
    // Consumimos datos del store con useSelector
    const estado = useSelector((state)=>{
        return state;
    }) 
    console.log(estado);

    return (
        <div>
            Cartera actual: <strong>{estado.balance.balance}</strong>
            <br />
            Último mensaje: <strong>{estado.balance.mensaje}</strong>
        </div>
    )
}

export default Informacion
