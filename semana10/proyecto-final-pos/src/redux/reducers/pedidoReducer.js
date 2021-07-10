import { AGREGAR_PLATO_A_PEDIDO } from "../types/types";

const initialState = {
    pedidos: []
}
// const initialState = {
//     pedidos: [
//         {
//             mesaId: 5,
//             platos: [
//                 {
//                     plato_id: 3,
//                     plato_nom: 'Tequeños',
//                     plato_img:
//                         'https://dojiw2m9tvv09.cloudfront.net/34469/product/disenosintitulo-78982.png',
//                     plato_pre: '15.00',
//                     categoria_id: 2,
//                     cantidad: 2
//                 }
//             ]
//         }
//     ]
// };


export const pedidoReducer = (state=initialState, action) => {

    switch (action.type) {
        case AGREGAR_PLATO_A_PEDIDO:
            let pedidosState = [...state.pedidos];
            // Buscando la posicion del obbjeto pedido que tenga la mesaId a la cual queremos agregar el plato
            let posicionPedido = pedidosState.findIndex((objPedido)=>objPedido.mesaId === action.payload.mesaId)
            if(posicionPedido >= 0) {
                // implica que ya existe un pedido para la mesaId a la cual queremos agregar el plato
                // entonces buscamos el plato en la mesa encontrada
                let posicionPlato = pedidosState[posicionPedido].platos.findIndex((objPlato)=>objPlato.plato_id === action.payload.objPlato.plato_id)
                // analizamos si la posicion del plato es mayor o igual a cero para agregar 1 unidad en caso q existiera o agregar el 1er plato en caso no existiera
                if(posicionPlato>=0){

                    pedidosState[posicionPedido].platos[posicionPlato].cantidad++;

                } else {
                    // es el primer item del plato q agregamos a la mesa
                    // primer plato nuevo de una mesa con otros platos ya pedidos
                    let objPlatoNuevo = {
                        ...action.payload.objPlato,
                        cantidad: 1
                    }
                    pedidosState[posicionPedido].platos.push(objPlatoNuevo);
                }
            } else {
                // implica que es el primer plato de la mesaId
                // entonces creamos un objeto pedido nuevo con el primer plato de la mesa
                // primera vez en la mesa
                let objPedidoNuevo = {
                    mesaId: action.payload.mesaId,
                    platos:[
                        {
                            ...action.payload.objPlato,
                            cantidad: 1
                        }                        
                    ]
                }
                pedidosState.push(objPedidoNuevo);
            }
            return {
                ...state,
                pedidos:pedidosState
            }

            
        
    
        default:
            return state;
    }
}