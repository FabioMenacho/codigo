import React from 'react'
// dispatch para modificar estados
// selector para consumir estados
import {useDispatch, useSelector} from "react-redux"
import { seleccionarMesaAction } from '../../../redux/actions/mesaAction';

const PosMesa = ({objMesa}) => {

    const dispatch = useDispatch();
    // al state llega mesas, cargandoMEsas, idMesasSeleccionada
    const {idMesaSeleccionada} = useSelector((state)=> state.mesa);

    let claseActivo = +idMesaSeleccionada === +objMesa.mesa_id ? "activo" : "";
    // actualizamos con una variable global es decir un dispatch
    const seleccionarMesa = () => {
        dispatch(seleccionarMesaAction(objMesa.mesa_id))
    }


    return (
        <li className={`mesas__mesa ${claseActivo}`} onClick={seleccionarMesa}>
            <span className="mesas__titulo">Mesa</span>
            <span className="mesas__numero">{objMesa.mesa_nro}</span>
        </li>
    )
}

export default PosMesa
