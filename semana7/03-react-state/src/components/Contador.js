import React,{ useState } from 'react'

const Contador = () => {
    // let i = 0;

    // setState: retorna una arreglo
    // al lado derecho se le manda un valor inicial (0), puede ser string, array, etc
    // al lado izquierdo se esta desetructurando, renombrando las 2 variables, numero: variable de estado con el valor inicial, setNumero: función que se encarga de modificar el estado de la variable número, esto se debe a que las variables de estado no se pueden modificar directamente, ejm: numero = numero + 5 es error, las variables de estado se modifican a partir de la función setNumero
    const [numero, setNumero] = useState(0);

    // Crear un tercer boton para resetear el valor del numero a cero
    const clickReset = () => {
        setNumero(0);
    };

    const clickSumar = () => {
        setNumero(numero+1);
    };

    const clickRestar = () => {
        setNumero(numero-1);
    };

    return (
        <div>
            <button onClick={clickRestar}>-1</button>
            <span>{numero}</span>
            <button onClick={clickSumar}>+1</button>
            <button onClick={clickReset}>Reset</button>
        </div>
    )
}

export default Contador
