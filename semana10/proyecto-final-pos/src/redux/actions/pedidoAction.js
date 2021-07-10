import { AGREGAR_PLATO_A_PEDIDO } from "../types/types"

export const agregarPlatoAction = (objPlato, mesaId) => {
    return {
        type: AGREGAR_PLATO_A_PEDIDO,
        payload:{
            objPlato: objPlato,
            mesaId: mesaId
        }
    }
}