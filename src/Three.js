
import React, {useContext} from 'react'
import { MyContext } from './UseContextDemo'
function Three(){

    const {message,setMessage}=useContext(MyContext)

    const handleChange=()=>{
        setMessage("Helloooo codekul")
    }
    return(

        <div>
            <h2>Check Context Three</h2>
            <p>MessageThree : {message}</p>
            <button type="button" onClick={handleChange}>Change</button>
        </div>
    )
}
export default Three
