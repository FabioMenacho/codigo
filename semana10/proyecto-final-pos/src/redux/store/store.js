import {createStore, combineReducers, applyMiddleware, compose} from "redux"
// redux-thunk para retornar una función y no una action normal y permite usar el dispatch varias veces en una misma funcion
import thunk from "redux-thunk"
import { categoriaReducer } from "../reducers/categoriaReducer";
import { mesaReducer } from "../reducers/mesaReducer";
import { pedidoReducer } from "../reducers/pedidoReducer";
import { platoReducer } from "../reducers/platoReducer";

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    mesa: mesaReducer,
    categoria: categoriaReducer,
    plato: platoReducer,
    pedido: pedidoReducer
})

export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));