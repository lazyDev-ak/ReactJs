import React from 'react'
import { useLocation } from 'react-router-dom'

function Services(){

    const location=useLocation()

    return(
        <div>
            <h1>Services Component!!!</h1>
            <p>This is Services Component!!!</p>
            <p> Name : {location.state.name}</p>
            <p> City : {location.state.city}</p>
        </div>
    )
}

export default Services