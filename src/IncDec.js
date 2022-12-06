import React,{useState} from 'react' 

function IncDec(){

    const[number,setNumber]=useState(0)
   
    const inc=()=>{
        setNumber(number+10)
    }

    const dec=()=>{
        setNumber(number-10)
    }

    return(
        <div>
            <h1>Inc Dec Example</h1>
            <p>Number is : {number}</p>
            <button type='button' onClick={inc}>Inc</button>
            <button type='button' onClick={dec}>Dec</button>
        </div>
    )
}

export default IncDec