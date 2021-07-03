import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CarritoPago from './pages/CarritoPago'
import CarritoResumen from './pages/CarritoResumen'
import CarritoHeader from './components/CarritoHeader'

const CarritoRouter = () => {
    return (
        <>
            <CarritoHeader/>
            <Switch>
                <Route path="/carrito/resumen" component={CarritoResumen}/>
                <Route path="/carrito/pago" component={CarritoPago}/>
            </Switch>
        </>
    )
}

export default CarritoRouter
