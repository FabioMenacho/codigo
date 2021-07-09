import React from 'react'
import PosMesa from './PosMesa'
import {useSelector} from "react-redux"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSpinner} from "@fortawesome/free-solid-svg-icons"

const PosMesas = () => {
    // consumo del state del reducer mesa 
    // mesaState tiene el estado global del reducer mesa
    // desestructuramos
    const {mesas, cargandoMesas} = useSelector((state)=>{
        return state.mesa
    });
    // console.log(mesaState);

    return (
        <div className="mesas">
                        <ul className="mesas__lista">
                            {
                                cargandoMesas === true ? <FontAwesomeIcon icon={faSpinner} spin size="3x" color="white"/> : 
                                mesas.map((objMesa)=>{
                                    return <PosMesa objMesa={objMesa} key={objMesa.mesa_id}/>
                                })
                            }
                        </ul>
                        <div className="mesas__info"></div>
                    </div>
    )
}

export default PosMesas
