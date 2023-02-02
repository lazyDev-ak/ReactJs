import axios from 'axios'
import React,{useEffect} from 'react'

function ApiCall(){

    const userObj={
        firstName:'',
        lastName:''
    }

    const[user,setUser]=React.useState(userObj)
    const[users,setUsers]=React.useState([])

    useEffect(()=>{
        axios.get("http://localhost:8889/multiple")
        .then(response=>response.data)
        .then(res=>{
            setUsers(res)
        })
    })

    const handleInput=(event)=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const saveData=()=>{
        axios.post("http://localhost:8889/saveData",user)
        .then(response=>response.data)
        .then(res=>{
            console.log("Data saved!!!");
        })
    }

    return(
        <div>
            <h1>API Call!!!</h1>

            <form>
                <label>FirstName : </label>
                <input type="text" name="firstName" onChange={handleInput}/>

                <label>LastName : </label>
                <input type="text" name="lastName" onChange={handleInput}/>

                <label>City : </label>
                <input type="text" name="city" onChange={handleInput}/>

                <button type='button' onClick={saveData}>Submit</button>
            </form>

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