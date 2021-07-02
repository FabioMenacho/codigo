import {createStore, combineReducers} from "redux"
import { carritoReducer } from "../reducers/carritoReducer";


const reducers = combineReducers({
    carrito: carritoReducer
})

export const store = createStore(
    reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());