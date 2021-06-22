import React, { useState } from 'react'

const AleatorioArreglo = (props) => {

    const [numeros, setNumeros] = useState([]);

    const generarAleatorio = () => {
        let nuevoAleatorio = Math.random()*(props.max-props.min)+props.min;
        let copiaNumeros = [...numeros];
        copiaNumeros.push(nuevoAleatorio);
        setNumeros(copiaNumeros);
    }

    return (
        <div>
            <button onClick={generarAleatorio}>Generar nuevo aleatorio</button>
            <ul>
                {
                    numeros.map ((n,i)=>{
                        // el key para que no salgan warnings
                        return <li key={i}>{n}</li>
                    })
                }
            </ul>
            
        </div>
    )
}

export default AleatorioArreglo
