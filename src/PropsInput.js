import React from 'react'

function PropsInput(){
    const[message,setMessage]=React.useState('')
    const handleInput=(event)=>{
        setMessage(event.target.value)
    }
    return(
        <div>
            <input type="text" onChange={handleInput}/>
            <Demo message={message}/>
        </div>
    )
}


function Demo(props){
    return(
        <div>
            <h2>Display data from PropsInput!!!</h2>
            <p>Message : {props.message}</p>
        </div>
    )
}

export default PropsInput