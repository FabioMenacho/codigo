import React from 'react'
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom'

// ne las props van el path y components de admin
const PrivateRoute = (props) => {

    // desestructurando el state
    const { cargando, autenticado } = useSelector((state) => state.auth)

    if (cargando) {
        return <div>CARGANDO...</div>
    } else {
        // cuando es verdadero entra a la pag si coloco falso no entra y se redirecciona en el else 
        // const autenticado = true;
        // sin los parentesis ni <> porque es 1 solo elemento
        if (autenticado) {
            return <Route path={props.path} component={props.component} />
        } else {
            return <Redirect to={"/"} />
        }
    }
}

export default PrivateRoute
