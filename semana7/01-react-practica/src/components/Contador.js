import React,{ useState } from 'react'

const Contador = () => {
    
    const [numero,setNumero] = useState(0);

    const clickReset = () => {
        setNumero(0);
    };

    const clickRestar = () => {
        setNumero(numero-1);
    };

    const clickSumar = () => {
        setNumero(numero+1);
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
