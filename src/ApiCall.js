import axios from 'axios'
import React,{useEffect} from 'react'

function ApiCall(){

    const[users,setUsers]=React.useState([])

    useEffect(()=>{
        axios.get("http://localhost:8889/multiple")
        .then(response=>response.data)
        .then(res=>{
            setUsers(res)
        })
    })

    return(
        <div>
            <h1>API Call!!!</h1>
            <ul>
                {
                    users.map((user)=>(
                        <li>{user.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ApiCall