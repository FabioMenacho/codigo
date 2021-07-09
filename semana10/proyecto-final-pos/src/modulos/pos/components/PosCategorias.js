import React from 'react'
import PosCategoria from './PosCategoria'
import {useSelector} from "react-redux"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSpinner} from "@fortawesome/free-solid-svg-icons"

const PosCategorias = () => {
    // ahora state tiene reducer mesa y reducer categoria (se ve en el inspaccionador de redux)
    const {categorias, cargandoCategorias} = useSelector((state) => state.categoria);

    return (
        <nav className="menu">
            
            <ul className="menu__lista">
            
                {
                    cargandoCategorias ? <FontAwesomeIcon icon={faSpinner} spin size="3x" color="white"/> : categorias.map((objCategoria)=>{
                        return <PosCategoria objCategoria={objCategoria} key={objCategoria.categoria_id}/>;
                    })
                }
            </ul>
        </nav>
    )
}

export default PosCategorias
