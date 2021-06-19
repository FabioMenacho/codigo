import React, { useState } from 'react'

const AleatorioArreglo = (props) => {

    const [numeros, setNumeros] = useState([]);

    const generarAleatorio = () => {
        let nuevoAleatorio = Math.random()*(props.max-props.min)+props.min;
        // copia de los arreglos pero en una nueva direccion de memoria
        let copiaNumeros = [...numeros];
        copiaNumeros.push(nuevoAleatorio);
        // setNumero actualiza estados, chanca todo el arreglo porque queremos tener todo el arreglo para imprimir
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
