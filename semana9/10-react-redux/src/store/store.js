// para crear el store para varios reducers
import {createStore, combineReducers} from "redux";
import { balanceReducer } from "../reducers/balanceReducer";

const reducers = combineReducers({
    // colocamos los reducers que tengamos, balance es nuestro 1er reducer
    balance: balanceReducer
})

export const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
