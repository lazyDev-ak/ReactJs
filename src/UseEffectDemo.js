import React,{ useEffect } from "react"

function UseEffectDemo(){

    const[value,setValue]=React.useState(0)

    const[userList,setUSerList]=React.useState([])

    //case 1
    // useEffect(()=>{
    //    fetch('https://jsonplaceholder.typicode.com/users')
    //    .then(response=>response.json())
    //    .then(res=>{
    //     console.log(res);
    //      //   setUSerList(res)
    //    })
    // })

    //case 2
    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response=>response.json())
    //     .then(res=>{
    //      console.log(res);
    //          setUSerList(res)
    //     })
    // },[])

    //case 3
    useEffect(()=>{
       if(userList.length===0){
        fetch('https://jsonplaceholder.typicode.com/users')
             .then(response=>response.json())
             .then(res=>{
              console.log(res);
                  setUSerList(res)
        })
      }
    },[value])

    const increment=()=>{
        setValue(value+10)
    }

    return(
        <div>
            <h1>Use Effect Demo!!!</h1>
            <ul>
                {
                    userList.map((user)=>(
                        <li>{user.username+' '+user.address.city}</li>
                    ))
                }
            </ul>
            <p> Value is : {value}</p>
            <button type="button" onClick={increment}>Inc</button>
        </div>
    )
}

export default UseEffectDemo