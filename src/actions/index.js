import * as actionTypes from './actionTypes'

export const addCounter=()=>({
    type:actionTypes.ADD_COUNTER,
    payload:1
})

export const reduceCounter=()=>({
    type:actionTypes.REDUCE_COUNTER,
    payload:1
})
