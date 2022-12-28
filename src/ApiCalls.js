import axios from 'axios'
import React,{ useEffect } from 'react'

function ApiCall(){

    const[userList,setUserList]=React.useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.data)
        .then(res=>{
            setUserList(res)
        })
    },[])

    const[data,setData]=React.useState()

    const post={
        userId:1,
        title:"Demo",
        body:"Test POST API"
    }
    const sendData=()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",post)
        .then(response=>response.data)
        .then(res=>{
            console.log(res);
            setData(res)
        })
        console.log("hiiiiiiiiii");
    }

    return(
        <div>
            <h1>Api Call Test</h1>
            <ul>
                {userList.map((user)=>(
                    <li>{user.username}</li>
                ))}
            </ul>

            <button type='button' onClick={sendData}>Send</button>
            {JSON.stringify(data)}
        </div>
    )
}

export default ApiCall