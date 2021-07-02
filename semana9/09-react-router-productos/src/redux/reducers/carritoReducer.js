import { AGREGAR_PRODUCTO } from "../types/types";

const initialState = {
    productos: [],
    total: 0,
}

// se comunica con distpatch y manda el objeto action con type y payload
export const carritoReducer = (state=initialState, action) => {
    switch (action.type) {
        case AGREGAR_PRODUCTO:

            // buscar el producto que se desea agregar en el estado de la aplicación
            let copiaProductos = [...state.productos];
            let posicion = copiaProductos.findIndex((objProducto)=>objProducto.id === action.payload.id)
            // si la posición es mayor o igual a 0 significa que el producto ya existia en el carrito global
            if(posicion>=0){
                copiaProductos[posicion].cantidad+=1;
            }else{
            // este es el caos en el que no exista el producto en el carrito global
            copiaProductos.push({...action.payload, cantidad:1});
            }

            // aqui sacar el total
            let montoTotal = copiaProductos.reduce((sumatoria, objProducto) =>{
                return objProducto.precio*objProducto.cantidad+sumatoria;
              },0);
            //   console.log(montoTotal);


            return{
                ...state, 
                productos: copiaProductos,
                // obtener el precio total de toda la compra
                // Recorrer los produtos de la copiaProductos final, con la función reduce para obtener el total
                total: montoTotal
            }
            break;
    
        default:
            return state;
    }
}