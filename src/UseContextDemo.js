import React, { createContext, useContext } from "react"

const MyContext=createContext()

function UseContextDemo(){

    const [message,setMessage]=React.useState("Hello React!!!")

    const handleChange=()=>{
        setMessage("Hiiiiiiiii")
    }

    return(
        <MyContext.Provider value={{message,setMessage}}>
        <div>
            <h1>Use context Demo</h1>
            <p>Message : {message}</p>
            <button type="button" onClick={handleChange}>Change</button>
            <CheckContextOne/>
            <CheckContextTwo/>

        </div>
        </MyContext.Provider>
    )
}

function CheckContextOne(){

    const {message,setMessage}=useContext(MyContext)

    const handleChange=()=>{
        setMessage("Helloooooooo")
    }

    return(
        <div>
            <h2>Check Context One</h2>
            <p>Message1 : {message}</p>
            <button type="button" onClick={handleChange}>Change</button>
        </div>
    )
}


function CheckContextTwo(){
    
    const {message,setMessage}=useContext(MyContext)

    const handleChange=()=>{
        setMessage("byyyyeeeeee")
    }
    return(
        <div>
            <h2>Check Context Two</h2>
            <p>MessageTwo : {message}</p>
            <button type="button" onClick={handleChange}>Change</button>
        </div>
    )
}

export default UseContextDemo