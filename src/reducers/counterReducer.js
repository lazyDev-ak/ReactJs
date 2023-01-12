import * as actionTypes from '../actions/actionTypes'

const counterReducer=(state=100,action)=>{
    let newState
    switch(action.type){
        case actionTypes.ADD_COUNTER:
            return newState=state+action.payload

        case actionTypes.REDUCE_COUNTER:
            return newState=state-action.payload  
            
        default:
            return state    
    }
}

export default counterReducer
