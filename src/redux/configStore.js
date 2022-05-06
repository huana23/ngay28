import {combineReducers, createStore} from "redux";
import { QLNDReducer } from "./Reducers/QLNDReducer";


const rootReducer = combineReducers({
   

    QLNDReducer




});

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());