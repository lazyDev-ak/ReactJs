import * as actionTypes from '../actions/actionTypes'

const counterReducer=(state=[{id:1,name:"Pen"}],action)=>{
    let newState=[]
    switch(action.type){
        case actionTypes.ADD_COUNTER:
            let prods=[...state,action.payload]
            newState=[...prods]
            return newState

        case actionTypes.REDUCE_COUNTER:
            return newState=state-action.payload  
            
        default:
            return state    
    }
}

export default counterReducer
