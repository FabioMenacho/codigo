import { URL_BACKEND } from "../../environments/environments";
import { FIN_CARGANDO_MESAS, INICIO_CARGANDO_MESAS, SET_MESAS, SET_SELECCIONAR_MESA } from "../types/types";
import axios from "axios";

export const setCargandoMesas = () => {
    return {type: INICIO_CARGANDO_MESAS};
}

export const setFinCargandoMesas = () => {
    return {type: FIN_CARGANDO_MESAS};
}

// getMesas retorna una funcion asincrona
export const getMesas = () => {
    // action encargado de traer las mesas de la BD
    return async (dispatch) => {
        dispatch(setCargandoMesas());
        
        const endpoint = `${URL_BACKEND}/mesa`;
        const response = await axios.get(endpoint);
        console.log(response.data);
        dispatch({
            type:SET_MESAS,
            // en el console.log(response.data) aparece esta direccion
            payload: response.data.content
        })


        dispatch(setFinCargandoMesas());

    }
    
}

export const seleccionarMesaAction = (id) => {
    return{
        type: SET_SELECCIONAR_MESA,
        payload: id
    }
}