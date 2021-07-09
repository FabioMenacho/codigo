import { URL_BACKEND } from "../../environment/environment";
import { FINISH_LOADING_LOGIN, SET_SUCCESS_LOGIN, START_LOADING_LOGIN } from "../types/types"
import axios from "axios"

export const login = (correo, password) => {
    return async (dispatch) => {
        dispatch({ type: START_LOADING_LOGIN });

        const endpoint = `${URL_BACKEND}/login`;
        const data = JSON.stringify({
            correo: correo,
            password: password
        })

        const response = await axios.post(endpoint, data, {
            headers: {
                "content-type": "application/json"
            }
        })
        // console.log(response);

        if (response.status === 200) {
            const token = response.data.token;
            const payloadToken = token.split(".")[1];
            // atob() sirve para decodificar strings basados en el algoritmo base64, le pertenece al objeto window (no se importa)
            // btoa() sirve para codificar un string en base64
            const payloadTokenDecoed = atob(payloadToken);
            const payloadJSON = JSON.parse(payloadTokenDecoed);
            localStorage.setItem("token", token);
            // aca se decodifica y se ve lo que viene de la base de datos
            console.log(payloadJSON);
            dispatch({
                type: SET_SUCCESS_LOGIN,
                payload: {
                    // con esos nombres viene de la base de datos
                    usuId: payloadJSON.usu_id,
                    usuNom: payloadJSON.usu_tipo,
                    usuTipo: payloadJSON.usu_tipo,
                    token: token,
                    autenticado: true
                }
            })
            dispatch({ type: FINISH_LOADING_LOGIN })
        }

    }
}

export const loginLocalStorage = () => {
    return async (dispatch) => {
        try {
            let token = localStorage.getItem("token");
        if (token) {
            // la ruta del postman
            const endpoint = `${URL_BACKEND}/verificar`
            const response = await axios.post(endpoint, null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (response.status === 200) {
                const payloadToken = token.split(".")[1];
                // atob() sirve para decodificar strings basados en el algoritmo base64, le pertenece al objeto window (no se importa)
                // btoa() sirve para codificar un string en base64
                const payloadTokenDecoed = atob(payloadToken);
                const payloadJSON = JSON.parse(payloadTokenDecoed);
                // aca se decodifica y se ve lo que viene de la base de datos
                console.log(payloadJSON);
                dispatch({
                    type: SET_SUCCESS_LOGIN,
                    payload: {
                        // con esos nombres viene de la base de datos
                        usuId: payloadJSON.usu_id,
                        usuNom: payloadJSON.usu_tipo,
                        usuTipo: payloadJSON.usu_tipo,
                        token: token,
                        autenticado: true
                    }
                })
                dispatch({ type: FINISH_LOADING_LOGIN })
            } else {
                // to do: renovar el token si era un token caducado
                // to do: eliminar el token en caso de que era un token invalido
                dispatch({ type: FINISH_LOADING_LOGIN })
            }
        } else {
            dispatch({type: FINISH_LOADING_LOGIN});
        }            
        } catch (error) {
            dispatch({type: FINISH_LOADING_LOGIN});
        }        
    }
}