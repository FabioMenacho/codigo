import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { seleccionarCategoriaAction } from '../../../redux/actions/categoriaAction';

const PosCategoria = ({objCategoria}) => {
    const dispatch = useDispatch();
    const seleccionarCategoria = () => {
        dispatch(seleccionarCategoriaAction(objCategoria.categoria_id))
    }
    // idCategoriaSeleccionada es un atributo de categoria y esta en el inspeccionador de redux
    const {idCategoriaSeleccionada} = useSelector((state)=>state.categoria)
    const activeClass = +idCategoriaSeleccionada === +objCategoria.categoria_id ? "active" : "";

    return (
        <li onClick={seleccionarCategoria} className={activeClass}>
            <img src="/images/plato_blanco.svg" alt="" />
            {/* ver el postman para ver que retorna */}
            <span>{objCategoria.categoria_nom}</span>
        </li>
    )
}

export default PosCategoria
