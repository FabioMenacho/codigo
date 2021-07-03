import { AGREGAR_PRODUCTO, ELIMINAR_PRODUCTO } from "../types/types";

export const agregarProductoAlCarrito = (objProducto) => {
    return {
        type: AGREGAR_PRODUCTO,
        payload: objProducto        
    }
};

export const eliminarProductoDelCarrito = (objProducto) => {
    return {
        type: ELIMINAR_PRODUCTO,
        payload: objProducto
    }
}