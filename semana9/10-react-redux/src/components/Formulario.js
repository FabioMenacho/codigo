import React,{useRef} from 'react'
import { useDispatch } from 'react-redux';

const Formulario = () => {
    const refMensaje = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "MODIFICAR_MENSAJE",
            payload:{
                mensaje:refMensaje.current.value
            }
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Ingresar nuevo mensaje</label>
                <input type="text" ref={refMensaje}/>
                <button type="submit">Modificar mensaje</button>
            </form>
        </div>
    )
}

export default Formulario
