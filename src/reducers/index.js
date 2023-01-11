import counterReducer from "./counterReducer";

import {combineReducers} from 'redux'

const counterApp=combineReducers({
    counterReducer
 })

 export default counterApp