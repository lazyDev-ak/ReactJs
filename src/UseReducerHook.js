import { useReducer } from "react"

const initialState={count:0}

function reducer(state,action){

    switch(action.type){
        case "add":
            return {count : state.count + 1}

        case "sub":
            return {count : state.count - 1}
            
         default:
            return new Error()   
    }
}

function UseReducerHook(){

    const [state,dispatch]=useReducer(reducer,initialState)

    return(
        <div>
            <h1>Use Reducer Hook!!!</h1>
            <p>Count is : {state.count}</p>
            <button type="button" onClick={()=>dispatch({type:"add"})}>Add</button>
            <button type="button" onClick={()=>dispatch({type:"sub"})}>Sub</button>
        </div>
    )
}

export default UseReducerHook