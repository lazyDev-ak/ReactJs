
import React from 'react' 
function PropsExample(){

    const userObj={
        firstName:'',
        lastName:''
    }

    const[user,setUser]=React.useState(userObj)
    const[userList,setUserList]=React.useState([])

    const handleInput=(event)=>{
       setUser({...user,[event.target.name]:event.target.value})
    }

    const addData=()=>{
        setUserList([...userList,user])
        document.getElementById('myform').reset()
    }
    return(
        <div>
            <form id="myform">
                <label>FirstName : </label>
                <input type="text" onChange={handleInput} name="firstName"/>

                <label>LastName : </label>
                <input type="text" onChange={handleInput} name="lastName"/>

                <button type='button' onClick={addData}>Submit</button>
            </form>
            <DisplayUsers userList={userList}/>
        </div>
    )
}

function DisplayUsers({userList}){
    return(
        <div>
            <ul>
                {
                    userList.map((user,index)=>(
                        <li key={index}>{user.firstName + " "+user.lastName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PropsExample