import { AGREGAR_DINERO } from "../types/types";
import { RESTAR_DINERO } from "../types/types";

export const sumarBalance = (cantidad) => {
    return{
        type:AGREGAR_DINERO,
            payload: {
                monto: cantidad,
                mensaje: "Agregando 10 soles"
            }
    }
}

export const restarBalance = (cantidad) => {
    return{
        type:RESTAR_DINERO,
            payload: {
                monto: cantidad,
                mensaje: "Restando 10 soles"
            }

    }
}