import axios from "axios";
import { URL_BACKEND } from "../../environments/environments"
import { SET_CATEGORIAS, SET_CATEGORIAS_CARGANDO, UNSET_CATEGORIAS_CARGANDO } from "../types/types"

export const cargarCategorias = () => {
    // retorno una funcion anónima asincrona
    return async (dispatch)=>{
        // entra 1 dispatch pero se puede utilizar varias veces
        dispatch({
            type: SET_CATEGORIAS_CARGANDO
        })

        // esto debería estar en un servicio
        const url = `${URL_BACKEND}/categories`;
        const response = await axios.get(url);
        dispatch({
            type: SET_CATEGORIAS,
            payload:{
                categorias: response.data
            }
        })

        dispatch({
            type: UNSET_CATEGORIAS_CARGANDO
        })
    }


    // return{
    //     type: SET_CATEGORIAS,
    //     payload:{
    //         categoria: ["cat1", "cat2", "cat3"]
    //     }
    // }

}