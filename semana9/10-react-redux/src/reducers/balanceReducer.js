// El reducer es la función que recibe solicitudes del dispatch para cambiar el estado global
// state: una copia del estado global antiguo
// action: es el objeto que nos envia el dispatch
// el reducer retorna el nuevo estado global
// en el return se coloca balance y mensaje
// siempre recibimos un state (objeto vacio por defecto) y action
import { MODIFICAR_MENSAJE } from "../types/types";
import {AGREGAR_DINERO} from "../types/types";
import { RESTAR_DINERO } from "../types/types";

export const balanceReducer = (state = {balance:0, mensaje:""}, action) => {

    switch (action.type) {
        case AGREGAR_DINERO:
            // retorna el nuevo estado
            return {
                balance: state.balance + action.payload.monto,
                mensaje: action.payload.mensaje
            }

            case RESTAR_DINERO:
            // retorna el nuevo estado
            return {
                balance: state.balance - action.payload.monto,
                mensaje: action.payload.mensaje
            }

            case MODIFICAR_MENSAJE:
            // retorna el nuevo estado
            return {
                // a balance como no va cambiar le doy el mismo valor xq el objeto no puede revibir 1 solo valor (mensaje) 
                ...state,
                mensaje: action.payload.mensaje
            }
        default:
            return state;
    }
}
