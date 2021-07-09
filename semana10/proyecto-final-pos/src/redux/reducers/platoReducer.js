import { FIN_CARGANDO_PLATOS_POR_CATEGORIA, INICIO_CARGANDO_PLATOS_POR_CATEGORIA, SET_PLATOS_PLATOS_POR_CATEGORIA } from "../types/types";


const initialState = {
    // plato seleccionado por categoria seleccionada
    platosPorCategoria: [],
    cargandoPlatosPorCategoria: false
};

export const platoReducer = (state = initialState, action) => {
    switch (action.type) {
        case INICIO_CARGANDO_PLATOS_POR_CATEGORIA:
           return {
               ...state,
               cargandoPlatosPorCategoria: true
           } 

        case FIN_CARGANDO_PLATOS_POR_CATEGORIA:
           return {
               ...state,
               cargandoPlatosPorCategoria: false
           } 

        case SET_PLATOS_PLATOS_POR_CATEGORIA:
           return {
               ...state,
               platosPorCategoria: action.payload
           }            
    
        default:
            return state;
    }
}