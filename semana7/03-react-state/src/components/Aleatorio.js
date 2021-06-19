import React, { useState } from 'react'    

const Aleatorio = (props) => {

    let max = props.max;
    let min = props.min;
    let estadoInicial = Math.random()*(max-min)+min;
    let [numero, setNumero]  = useState(estadoInicial);

    const generarNuevo = () => {
        let nuevoAleatorio = Math.random()*(max-min)+min; 
        setNumero(nuevoAleatorio);
    }

    return (
        <div>
            <h4>Aleatorio entre: {min} y {max}</h4>
            <p>{numero}</p>
            <button onClick={generarNuevo}>Generar uno nuevo</button>
        </div>
    )
}

export default Aleatorio
