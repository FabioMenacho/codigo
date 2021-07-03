import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import CatalogoProductos from './pages/CatalogoProductos'

const CatalogoRouter = () => {
    return (
        <>
            <Switch>
            <Route path="/catalogo/productos" component={CatalogoProductos} />
            <Redirect to="/catalogo/productos" />
            </Switch>   
        </>
    )
}

export default CatalogoRouter
