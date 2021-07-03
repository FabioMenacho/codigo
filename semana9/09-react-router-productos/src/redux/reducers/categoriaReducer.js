import { SET_CATEGORIAS, SET_CATEGORIAS_CARGANDO, UNSET_CATEGORIAS_CARGANDO } from "../types/types";


const initialState = {
    categorias:[],
    cargando: true
}


export const categoriaReducer = (state=initialState,action) => {
    switch (action.type) {
        case UNSET_CATEGORIAS_CARGANDO:
            return{
                ...state,
                cargando: false
            }

        case SET_CATEGORIAS_CARGANDO:
            return{
                ...state,
                cargando: true
            }

        case SET_CATEGORIAS:
            return{
                ...state,
                categorias: action.payload.categorias
            }            
            break;
    
        default:
            return state;
    }
}