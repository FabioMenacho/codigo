import { AGREGAR_PLATO_A_PEDIDO, ELIMINAR_PEDIDO } from "../types/types"


export const agregarPlatoAction = (objPlato, mesaId) => {
    return {
        type: AGREGAR_PLATO_A_PEDIDO,
        payload:{
            objPlato: objPlato,
            mesaId: mesaId
        }
    }
}

export const eliminarPedidoPorMesaIdAction = (mesaId) => {
    return {
        type: ELIMINAR_PEDIDO,
        payload: mesaId
    }
}