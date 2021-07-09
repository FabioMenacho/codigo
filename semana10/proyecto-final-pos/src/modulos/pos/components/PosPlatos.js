import React, { useEffect } from 'react'
import PosPlato from './PosPlato'
import {useDispatch, useSelector} from "react-redux"
import { getPlatosByCategoriaId } from '../../../redux/actions/platoAction';

const PosPlatos = () => {
    // consumo el id de la categoria seleccionada, trae un nuevo estado (como el useState osea se ejecuta cada cambio)
    const {idCategoriaSeleccionada} = useSelector((state)=>state.categoria);
    const dispatch = useDispatch();

    if(idCategoriaSeleccionada!==-1){
        dispatch(getPlatosByCategoriaId(idCategoriaSeleccionada))
    }

    return (
        <div className="carta">
                            <h3>Lista de Platos Categoria: &nbsp; <span className="color-secundario">BEBIDAS</span></h3>

                            <div className="carta__platos">
                                <PosPlato/>
                                <PosPlato/>
                                <PosPlato/>
                                <PosPlato/>
                            </div>
                        </div>
    )
}

export default PosPlatos
