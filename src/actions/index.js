import * as actionTypes from './actionTypes'

export const addCounter=(product)=>({
    type:actionTypes.ADD_COUNTER,
    payload:product
})

export const reduceCounter=()=>({
    type:actionTypes.REDUCE_COUNTER,
    payload:1
})
