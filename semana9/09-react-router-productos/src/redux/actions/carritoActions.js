import { AGREGAR_PRODUCTO } from "../types/types";

export const agregarProductoAlCarrito = (objProducto) => {
    return {
        type: AGREGAR_PRODUCTO,
        payload: objProducto        
    }
};