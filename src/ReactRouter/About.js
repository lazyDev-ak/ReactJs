import React from 'react'
import { useParams } from 'react-router-dom'

function About(){

    const {message,message1}=useParams()

    return(
        <div>
            <h1>About Component!!!</h1>
            <p>This is About Component!!!</p>
            <p>Message is : {message}</p>
            <p>Message1 is : {message1}</p>
        </div>
    )
}

export default About