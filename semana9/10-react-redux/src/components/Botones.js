import React from 'react'
import { useDispatch } from 'react-redux'
import { RESTAR_DINERO } from '../types/types';
import { AGREGAR_DINERO } from '../types/types';
import { sumarBalance } from '../actions/balanceAction';
import { restarBalance } from '../actions/balanceAction';

const Botones = () => {
    // para controlar todos los reducers usamos el useDispatch
    const dispatch = useDispatch();

    const agregar10lucas = () => {
        // este es el action
        dispatch(sumarBalance(10));
    }

    const restar10lucas = () => {
        // este es el action
        dispatch(restarBalance(10));
    }

    return (
        <div>
            <button onClick={agregar10lucas}>Agregar 10 soles</button>
            <button onClick={restar10lucas}>Restar 10 soles</button>
        </div>
    )
}

export default Botones
