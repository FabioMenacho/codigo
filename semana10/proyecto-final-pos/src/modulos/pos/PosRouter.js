import React from 'react'
import {Switch, Route} from "react-router-dom"
import PosPos from "./pages/PosPos"
import { useDispatch } from 'react-redux'
import { getMesas } from '../../redux/actions/mesaAction'
import { getCategorias } from '../../redux/actions/categoriaAction'

const PosRouter = () => {
    // llamo aca a la lista de mesas porque de aca se redirecciona a las paginas que usan las mesas, el dispatch se comunica con el reducer (entra al action)
    const dispatch = useDispatch();
    dispatch(getMesas());
    dispatch(getCategorias());

    return (
        <>
        <Switch>
            <Route path="/pos/pos" component={PosPos}/>
        </Switch>
        </>
    )
}

export default PosRouter
