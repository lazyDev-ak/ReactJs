import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home(){
    const message="React Routing!!!"
    const message1="React Routing123!!!"
    
    const person={
        name:"John Doe",
        city:"Mumbai"
    }

    const status=true;
    
    const navigate=useNavigate()
  
    const gotoAbout=()=>{
        navigate(`/about/${message}/${message1}`)
    }

    const sendObj=()=>{
        if(status){
            navigate('/services',{state:person})
        }
       
    }

    return(
        <div>
            <h1>Home Component!!!</h1>
            <p>This is Home Component!!!</p>
            <button type="button" onClick={gotoAbout}>About</button>
            <button type="button" onClick={sendObj}>Services</button>
        </div>
    )
}

export default Home 