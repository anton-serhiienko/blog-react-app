import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import postReducer from "./postReducer";

let reducers = combineReducers({
    postReducer: postReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;

export default store;