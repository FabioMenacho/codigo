import {createStore, combineReducers, compose, applyMiddleware} from "redux"
import { carritoReducer } from "../reducers/carritoReducer";
import thunk from "redux-thunk";
import { categoriaReducer } from "../reducers/categoriaReducer";

const reducers = combineReducers({
    carrito: carritoReducer,
    categoria: categoriaReducer
})

// para usar la variable global asincrona, importar compoe de redux, con esta extension de github no se usa la de abajo
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));


    // despues de la coma lo copiamos de git para que funcione redux devtool github
    // reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());