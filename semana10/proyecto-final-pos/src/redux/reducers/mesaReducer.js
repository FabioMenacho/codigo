import { FIN_CARGANDO_MESAS, INICIO_CARGANDO_MESAS, SET_MESAS, SET_SELECCIONAR_MESA } from "../types/types";


const initialState={
    mesas: [],
    cargandoMesas: false,
    // variable de estado para saber cual es la mesa selccionada
    idMesaSeleccionada:-1
};
// cuando se ejecuta dispatch llega aca (mesaReducer) y el type y payload se guardan en el action
export const mesaReducer = (state=initialState, action) =>{
// switch para los diferentes tipos de action del reducer
    switch (action.type) {
        case INICIO_CARGANDO_MESAS:
            return {...state,
                cargandoMesas: true
            }

        case FIN_CARGANDO_MESAS:
            return {...state,
                cargandoMesas: false
            }
    
        case SET_MESAS:
            return {...state,
                // actualizo el arreglo mesas del state
                mesas: action.payload
            }

        case SET_SELECCIONAR_MESA:
            return {...state,
                idMesaSeleccionada: action.payload
            }
        default:
            return state;
    }

}