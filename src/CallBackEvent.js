import React from 'react'
function CallBackEvent(){

    const[message,setMessage]=React.useState('')

    const handleInput=(event)=>{
        setMessage(event.target.value)
    }
    return(
        <div>
            <h1>Call Back Event</h1>
            <p>Message is: {message}</p>
            <CheckCallBack handleChange={handleInput}/>
        </div>
    )
}

function CheckCallBack(props){

    return(
        <input type='text' onChange={props.handleChange}/>
    )
}

export default CallBackEvent